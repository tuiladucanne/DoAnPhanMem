const express = require("express");
const route = express.Router();

const User = require("../controllers/user.controller");

route.get("/", User.hello);
route.post("/dangky", User.dangkyTK);
route.post("/dangnhap", User.dangnhap);
route.get("/trangchu", User.home);
route.put("/capnhapthongtin", User.Capnhapthongtin);
route.get("/tt", User.getTT);
route.get("/tt2", User.getTT2);
route.get("/tb", User.getThongBao);

// dang ky kham benh pages
route.get("/dangkykhambenh/theongay", User.Theongay);
route.post("/dangkykhambenh/datkham", User.Datkham);
route.get("/dangkykhambenh/all", User.getLichKham);

route.get("/thongbao", User.thongbao);
route.post("/laylaimk", User.laylaimk);
route.put("/doimatkhau", User.doimatkhau);
module.exports = route;
