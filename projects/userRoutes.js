const express =  require("express");
const router = express.Router();
const users = require("../data");
const userController = require("../controllers/userController");

router.get("/users", userController.getUsers);

router.get("/users/:id", userController.getUser);

router.post("/users", userController.createUser);

router.put("/users/:id", (req, res)=>{
    const userId = parseInt(req.params.id);

    const userIndex = users.findIndex(u=> u.id === userId);

    if(userIndex === -1){
        return res.status(404).json({
            message: "user not found"
        });
    }

    users[userIndex] = {
        ...users[userIndex],
        ...req.body
    }

    res.status(200).json({
        message: "User Updated",
        user: users[userIndex]
    });
});

router.delete("/users/:id", (req, res)=>{
    const userId = parseInt(req.params.id);

    const userIndex = users.findIndex(u=> u.id === userId);

    if(userIndex === -1){
        return res.status(404).json({
            message: "user not found"
        });
    }

    const deleteUser = users.splice(userIndex, 1);

    res.status(200).json({
        message:"user deleted",
        user: deleteUser[0]
    });

});

module.exports = router;