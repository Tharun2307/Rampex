const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (id) =>{
    return jwt.sign({id}, "Secret123", {expiresIn: "1d"});
};

exports.register = async (req, res) =>{
    const {name, email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    res.status(201).json({
        message: "User Registered"
    });
};

exports.login = async (req, res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({
            message: "Invalid Email"
        });
    };

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.status(400).json({
            message: "Invalid Password"
        });
    };
     
    const token = createToken(user._id);

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict"
    });

    res.json({
        message: "Login Successful"
    });
};

exports.logout = (req, res) => {
   res.clearCookie("token");
   res.json({ message: "Logout"});
};