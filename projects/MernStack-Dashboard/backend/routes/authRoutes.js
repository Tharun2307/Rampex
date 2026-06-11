const express = require("express");
const {register, login, logout} = require("../controllers/authControllers");
const protect = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/dashboard", protect, (req, res)=>{
    res.json({ message: "Welcome to Dashboard"});
});

module.exports = router;