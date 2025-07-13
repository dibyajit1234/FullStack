const Service = require("../models/service-model")

const services = async(req,res)=>{
    try {
        const response = await Service.find();
        if(!response){
            res.status(400).json({msg:"No service found"})
        }
        res.status(200).json({response})
    } catch (error) {
        console.log("service error :",error);
        
    }
}

module.exports = services