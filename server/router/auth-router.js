const express = require("express")
const router = express.Router()
const  authcontrolers = require("../controlers/auth-controler")
const {signupSchema,loginSchema} = require("../validators/auth-validator")
const validate = require("../middlewares/validate-middleware")
const authMiddleware = require("../middlewares/auth-middleware")

router.route("/").get(authcontrolers.home)
router.route("/register").post(validate(signupSchema),authcontrolers.register)
router.route("/login").post(validate(loginSchema),authcontrolers.login)
router.route('/user').get(authMiddleware,authcontrolers.user);

module.exports = router