const User = require('../models/user-model')
const Contact = require('../models/contact-model')
const Service  = require('../models/service-model')

const getAllUsers=async(req,res)=>{
    try {
        const users =await User.find({},{password:0});
        
        if(!users || users.length==0){
            return res.status(400).json({message:"Users db not found"})
        }
        return res.status(200).json(users)
    } catch (error) {
        next(error);
    }
}
// const getServices=async(req,res)=>{
//     try {
//         const services =await Service.find();
        
//         if(!services || services.length==0){
//             return res.status(400).json({message:"services db not found"})
//         }
//         return res.status(200).json(services)
//     } catch (error) {
//         next(error);
//     }
// }

const getAllContacts =async(req,res)=>{
    try {
        const contacts =await Contact.find();
        if(!contacts || contacts.length==0){
            return res.status(400).json({message:"Contacts db not found"})
        }
        return res.status(200).json(contacts)
    } catch (error) {
        next(error);
        
    }
}
const getUserById=async(req,res)=>{
    try {
        const id = req.params.id;
        const data=await User.findOne({_id:id})
        return res.status(200).json(data)
    } catch (e) {
        next(e)
        
    }
}

const deleteUserById =async (req,res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User Deleted Successfully"})
    } catch (e) {
        next(e)
    }
}
const deleteContactById =async (req,res)=>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({message:"Contact Deleted Successfully"})
    } catch (e) {
        return res.status(400).json({message:"Unable to delete the Contact"})
        next(e)
    }
}
const updateUserById =async (req,res)=>{
    try {
        const id = req.params.id;
        const updatedUserData = req.body;
        const updatedData = await User.updateOne(
            {_id:id},
            {
                $set:updatedUserData,
            }
        )
        return res.status(200).json({message:"User Updated Successfully"})
    } catch (e) {
        return res.status(400).json({message:"User not updated"})
        next(e)
    }
}

module.exports = {getAllUsers,getAllContacts,deleteUserById,updateUserById,getUserById,deleteContactById};