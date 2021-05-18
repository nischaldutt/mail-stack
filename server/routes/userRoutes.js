const router = require("express").Router();

const userController = require("../controller/userController");

module.exports = router;

router.post("/register", userController.registerNewUser);
