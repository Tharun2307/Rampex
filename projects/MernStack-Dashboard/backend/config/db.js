const mongoose = require("mongoose");

const connectDb = async ()=>{
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/data");
    console.log("MongoDB Connected");
    }catch(err){
        console.log("MonghoDB connection Failed", err.message);
    }
};

module.exports = connectDb;