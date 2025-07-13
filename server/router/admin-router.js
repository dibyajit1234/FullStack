const express = require("express")
const {getAllUsers,getAllContacts, deleteUserById, updateUserById, getUserById, deleteContactById} = require("../controlers/admin-contriler")
const authMiddleware = require('../middlewares/auth-middleware')
const adminMiddleware = require("../middlewares/admin-middleware")
const router = express.Router()


router.route('/user').get(authMiddleware,adminMiddleware,getAllUsers)
router.route('/contact').get(authMiddleware,adminMiddleware,getAllContacts)
router.route("/contact/delete/:id").delete(authMiddleware,adminMiddleware,deleteContactById)


router.route("/user/:id").get(authMiddleware,adminMiddleware,getUserById)

router.route("/user/delete/:id").delete(authMiddleware,adminMiddleware,deleteUserById)
router.route("/user/update/:id").patch(authMiddleware,adminMiddleware,updateUserById)


module.exports = router