
const adminMiddleware = async(req , res,next)=>{
    try {
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(400).json({message:"Access denied!! User is not Admin"})
        }
        next()
        
    } catch (error) {
        next(error)
    }
}
module.exports = adminMiddleware