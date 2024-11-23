// models/BenhVien.js
const mongoose = require("mongoose");

const benhVienSchema = new mongoose.Schema({
  tenBenhVien: { type: String, required: true },
  diaChi: { type: String, required: true },
  thanhPho: { type: String, required: true },
  soDienThoai: { type: String, required: true },
  email: { type: String },
  website: { type: String },
  moTa: { type: String },
  hinhAnh: { type: String },
  active: { type: Boolean, default: true },
});

const BenhVien = mongoose.model("BenhVien.US", benhVienSchema);
module.exports = BenhVien;
