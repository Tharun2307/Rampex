const userModel = require("../models/userModel");

exports.getUsers = (req, res) => {
    res.status(200).json(userModel.getAllUsers());
}

exports.getUser = (req, res)=>{
    const userId = parseInt(req.params.id);
    const user = userModel.getUserById(userId);

    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({
            message: "User not found"
        });
    }

}

exports.createUser = (req, res)=>{
    const newUser = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age
    }

    userModel.addUser(newUser);
    res.status(201).json({
        message: "User Created",
        user: newUser
    });
}