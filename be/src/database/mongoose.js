const mongoose = require("mongoose");

// Đặt Promise của Mongoose sử dụng Promise tích hợp sẵn
mongoose.Promise = global.Promise;

// Kết nối đến MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error");
    process.exit(1);
  }
}; 

module.exports = connectDB;
