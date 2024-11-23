const mongoose = require("mongoose");

const thongbaoSchema = new mongoose.Schema(
  {
    TieuDe: { type: String },
    NoiDung: { type: String, default: null },
    UserId: { type: String },
  },
  {
    timestamps: true,
  }
);

const ThongBao = mongoose.model("ThongBao", thongbaoSchema);
module.exports = ThongBao;
