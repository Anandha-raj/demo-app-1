const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected success")
    }catch(error){
        console.log("DB erorr")
    }
}
module.exports = connectDB;