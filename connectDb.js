const mongoose = require("mongoose")

const connectDb = ()=>{
    mongoose.connect("mongodb+srv://likitha:likitha@cluster0.l3tfz.mongodb.net/blood-donation").then(()=>console.log("database connected")).catch((err)=>console.log(err));
    // const connect =  mongoose.connect("mongodb://127.0.0.1:27017/vishesh");
    //     console.log("database connection is established ");
}

module.exports = connectDb;