// Import các thư viện cần thiết
const express = require("express");
const cors = require("cors");
const connectDB = require('./database/mongoose'); 
const route = require("./routes");
const BacSi = require("./models/BacSi");
const BenhVien = require("./models/BenhVien");
require('dotenv').config({ path: './src/.env' }); // Đọc file .env để lấy biến môi trường
// const API_URL = "http://192.168.1.38:5000";
// Khởi tạo ứng dụng Express
const app = express();


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Cấu hình CORS
const corsOptions = {
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// Định tuyến (routes)
app.use("/", route);

// Cổng mặc định hoặc từ biến môi trường
const port = process.env.PORT || 3000;
const apiUrl = process.env.API_URL;
// Kết nối đến MongoDB và khởi động server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // get all doctors
    
  });
}).catch(err => {
  console.error('Failed to start server due to MongoDB connection error:', err);
});
