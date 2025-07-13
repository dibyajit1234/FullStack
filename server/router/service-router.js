const express = require("express");
const services = require("../controlers/service-controler");
const router = express.Router();

router.route("/service").get(services);

module.exports = router;