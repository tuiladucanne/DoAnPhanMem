const mongoose = require("mongoose");

const lichkhamSchema = new mongoose.Schema({
  NhanVienID: { type: mongoose.Schema.Types.ObjectId, ref: "NhanVien" },
  BacSiID: { type: mongoose.Schema.Types.ObjectId, ref: "BacSi.US" },
  BenhNhanID: { type: mongoose.Schema.Types.ObjectId, ref: "BenhNhan" },
  KhoaID: { type: mongoose.Schema.Types.ObjectId, ref: "Khoa" },
  NgayDat: { type: String },
  GioBatDau: { type: String },
  BenhVienID: { type: mongoose.Schema.Types.ObjectId, ref: "BenhVien.US" },
  GioKham: { type: String },
  UserId: { type: String },
});

const LichKham = mongoose.model("LichKham", lichkhamSchema);
module.exports = LichKham;
