const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  active: { type: Boolean, default: true, required: true },
  role: { type: String, default: "KH", required: true },
});

const TaiKhoan = mongoose.model("TaiKhoan", accountSchema);
module.exports = TaiKhoan;
