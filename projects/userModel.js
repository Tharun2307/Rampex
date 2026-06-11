const users = require("../data");

const getAllUsers = () => users;

const getUserById = (id) => users.find(u=> u.id === id);

const addUser = (user) => {
    users.push(user);
}

const updatedUser = (id, updatedData) =>{
    const index = users.findIndex(u=> u.id === id);

     if(userIndex === -1){
        return res.status(404).json({
            message: "user not found"
        });
    }

    users[userIndex] = {
        ...users[userIndex],
        ...updatedData
    }

}

const deleteUser = (id) => {
    const userIndex = users.findIndex(u=> u.id === userId);

    if(userIndex === -1){
        return res.status(404).json({
            message: "user not found"
        });
    }

    return users.splice(userIndex, 1)[0];
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updatedUser,
    deleteUser
}