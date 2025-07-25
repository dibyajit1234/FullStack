 const jwt = require("jsonwebtoken");
 const User = require("../models/user-model");


 
 const authMiddleware =async(req,res,next)=>{
    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({msg:"Unothorized http, token not provided"});
    }

    const jwtToken = token.replace("Bearer ","").trim();
    // console.log(jwtToken)
    
    try {
            const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);

            const userData = await User.findOne({email:isVerified.email}).select({password:0});

            req.user=userData
            req.token = token
            req.userId = userData._id
            
    next();
        
    } catch (error) {
        return res.status(401).json({message:"Unothorized http ,token not provided"});
    }

 }

 module.exports = authMiddleware;