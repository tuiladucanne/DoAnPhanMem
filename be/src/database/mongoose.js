const mongoose = require("mongoose");
require('dotenv').config({ path: './src/.env' }); // Đọc file .env để lấy biến môi trường
mongoose.Promise = global.Promise;

// Kết nối đến MongoDB
const connectDB = async () => {
  try {
   
    await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); 
  }
}; 

module.exports = connectDB;
