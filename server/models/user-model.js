const bcrypt = require("bcryptjs");
const mongoose  = require("mongoose")
const jwt = require("jsonwebtoken")

const userschema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

//secure the password with bcrypt
userschema.pre("save",async function(next){
    const user = this;
    if(!user.isModified('password')){
        next()
    }
    try {
        const saltRound = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password,saltRound)
        user.password = hashPassword
    } catch (error) {
        next(error)
    }
})

//compare the password
userschema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password )
}

//json web token jwt
userschema.methods.generateToken = function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email, 
            isAdmin:this.isAdmin

        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        }
    )
    } catch (error) {
        console.log(error)
    }
}

//define the model or the collection name

const User = new mongoose.model("Murgi",userschema)
module.exports = User