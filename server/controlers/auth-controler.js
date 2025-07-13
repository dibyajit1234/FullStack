const User = require("../models/user-model")
const bcrypt  = require("bcryptjs")

//user homepage
const home = async(req,res)=>{
    try {
        await res.status(200).send("welcome to home page")
    } catch (error) {
        console.log(error);

        
    }
}
//user register logic
const register = async(req,res)=>{

    try {
        console.log(req.body)
        const {username,email,phone,password}=req.body
        const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(400).json({message:"email already exist"})
        }

        //this is another methode of password hashing
        // const saltRound = 10
        // const hashPassword = await bcrypt.hash(password,saltRound)
        const userCreated = await User.create({username,email,phone,password})


        res.status(200).json({message: "regestration successful",token:await userCreated.generateToken(),userId:userCreated._id.toString(),})
    } catch (error) {
        console.log(error);
        
    }
}


//user login logic
const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const userExist = await User.findOne({email})
        if(!userExist){
            console.log(res.body);
            return res.status(400).json({message:"Invalid credential"})
            
        }

        //const user = await bcrypt.compare(password,userExist.password)
        const user = userExist.comparePassword(password)

        if(user){
            res.status(200).json({
                message:"login successful",
                token : await userExist.generateToken(),
                userId : userExist._id.toString()
            })
        }else{
            res.status(500).json({message:"invalid email or password banchod"})
        }
    } catch (error) {
        res.status(500).json("internal server error")
    }
}

//user logic - to send user data
const user =(req,res)=>{
    try {
        const userData = req.user;
        return res.status(200).json({userData});
    } catch (error) {
        console.log(`error form the user route : ${error}`);
        
    }
}

module.exports = {home,register,login,user}