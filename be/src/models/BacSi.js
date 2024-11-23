
// models/BacSi.js
const mongoose = require("mongoose");

const bacSiSchema = new mongoose.Schema({
    tenBacSi: { type: String, required: true },
    chuyenKhoa: { type: String, required: true },
    benhVien: { type: mongoose.Schema.Types.ObjectId, ref: 'BenhVien', required: true },
    kinhNghiem: { type: Number, required: true }, // số năm kinh nghiệm
    bangCap: { type: String, required: true }, // PGS.TS, TS, ThS, BS...
    gioiTinh: { type: String, required: true }, // Nam/Nữ
    ngaySinh: { type: Date },
    soDienThoai: { type: String },
    email: { type: String },
    hinhAnh: { type: String },
    active: { type: Boolean, default: true }
});

const BacSi = mongoose.model("BacSi.US", bacSiSchema);
module.exports = BacSi;