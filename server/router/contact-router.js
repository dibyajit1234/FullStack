const express = require("express")
const router = express.Router();
const contactForm = require("../controlers/contact-controler")


router.route("/contact").post(contactForm)

module.exports = router 