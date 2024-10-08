const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");


router.post("/signup", signup);
router.get("/signup", signup);

router.post("/login", login);
router.get("/login", login);

module.exports = router;
