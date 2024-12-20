const bcrypt = require("bcryptjs");
const TaiKhoan = require("../models/account.model");
const { message } = require("antd");
const BenhNhan = require("../models/BenhNhan");
const Khoa = require("../models/Khoa");
const LickKham = require("../models/LichKham");
const NhanVien = require("../models/NhanVien");
const ThongBao = require("../models/ThongBao");
const BacSi = require("../models/BacSi");
const BenhVien = require("../models/BenhVien");
module.exports.hello = async (req, res) => {
  res.json("day laf duong link /user");
};

module.exports.dangkyTK = async (req, res, next) => {
  try {
    const { email, password, username, role } = req.body;

    // Kiểm tra các trường bắt buộc
    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }

    // Kiểm tra xem người dùng đã tồn tại chưa
    const userExist = await TaiKhoan.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Tạo đối tượng người dùng và mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = new TaiKhoan({ email, password: hashedPassword, role });

    const saveUser = await userData.save();

    if (!role || role === "KH") {
      // Tạo đối tượng BenhNhan nếu role là KH hoặc không có role
      const newBenhNhan = new BenhNhan({
        Ten: username,
        Email: email,
        accountId: saveUser._id,
      });

      // Lưu đối tượng BenhNhan
      const saveBenhNhan = await newBenhNhan.save();

      return res.status(200).json({
        message: "User registered successfully",
        taiKhoan: saveUser,
        benhNhan: saveBenhNhan,
      });
    } else if (role === "NV") {
      // Tạo đối tượng NhanVien nếu role là NV
      const newNhanVien = new NhanVien({
        HoTen: username,
        Email: email,
        MaTK: saveUser._id,
      });

      // Lưu đối tượng NhanVien
      const saveNhanVien = await newNhanVien.save();

      return res.status(200).json({
        message: "User registered successfully",
        taiKhoan: saveUser,
        NhanVien: saveNhanVien,
      });
    }
  } catch (error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports.dangnhap = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;
    if (role === "KH") {
      console.log(email, password);
      const user = await TaiKhoan.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "user does not exits" });
      }
      console.log(password);
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        return res.status(400).json({ message: "invalid password." });
      }
      const idTK = user.id;
      console.log(idTK);
      const benhnhan = await BenhNhan.findOne({ accountId: idTK });
      console.log(benhnhan);
      return res
        .status(200)
        .json({ message: "login successfil", data: benhnhan });
    } else if (role === "NV") {
      console.log("check nv");
      console.log(email, password, role);
      const user = await TaiKhoan.findOne({ email });

      if (!user) {
        console.log;
        return res.status(400).json({ message: "user does not exits" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "invalid password." });
      }
      const idTK = user.id;
      const nhanVien = await NhanVien.findOne({ MaTK: idTK });
      return res
        .status(200)
        .json({ message: "login successfil", data: nhanVien });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
};

module.exports.home = async (req, res, next) => {};

module.exports.Capnhapthongtin = async (req, res, next) => {
  const { Email, Ten, NgaySinh, DiaChi, SDT, GioiTinh, CCCD } = req.body;
  const accountId = req.query.id;
  if (!Email) {
    return res
      .status(400)
      .json({ message: "email is required to update information." });
  }

  try {
    const updatedUser = await BenhNhan.findByIdAndUpdate(
      accountId,
      {
        Ten: Ten,
        NgaySinh: NgaySinh,
        DiaChi: DiaChi,
        SDT: SDT,
        GioiTinh: GioiTinh,
        CCCD: CCCD,
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({
      message: "User information updated successfully",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//////////////////////////////Dangkykhambenh/////////////////////////////////////////

// page dang ky khambenh / bacsi
// localhost:8080/user/dangkykhambenh/theobacsi
module.exports.Theobacsi = async (req, res, next) => {
  const {} = req.body;
};

// page dang ky khambenh / ngay -> ket qua tra ve la khoa
// localhost:8080/user/dangkykhambenh/theongay
module.exports.Theongay = async (req, res, next) => {
  try {
    const khoas = await Khoa.find();
    res.status(200).json({ dataKhoa: khoas });
  } catch (error) {
    res.status(500).json({ message: "Error fetching khoa information", error });
  }
};
// {
//   "benhVienId": "67420eadcf412d2f1bf4dfba",
//   "bacSiId": "674207b53a97d2e320e6cd9a",
//   "ngayKham": "5/6/2002",
//   "gioKham": "09:00",
//   "userId": "674141f882505254e4833c0a"
// }

// change pass word
module.exports.doimatkhau = async (req, res, next) => {
  try {
    const { id, password, newPassword } = req.body;
    const user = await TaiKhoan.findById(id);
    if (!user) {
      return res.status(400).json({ message: "user does not exits" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid password." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    const updatedUser = await TaiKhoan.findByIdAndUpdate(
      id,
      {
        password: hashedPassword,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      message: "Password updated successfully",
      updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
module.exports.Datkham = async (req, res, next) => {
  try {
    const { NgayDat, bacSiId, userId, benhVienId, gioKham, ngayKham } =
      req.body;
    console.log(req.body);
    const BN = await BenhNhan.findOne({ accountId: userId });
    if (!BN) {
      return res.status(400).json({ message: "BenhNhan not found" });
    }
    const LickKhamnew = new LickKham({
      BacSiID: bacSiId,
      BenhNhanID: BN._id,
      BenhVienID: benhVienId,
      NgayDat: ngayKham,
      GioKham: gioKham,
      UserId: userId,
    });

    const saveLichKham = await LickKhamnew.save();
    const bs = await BacSi.findById(bacSiId);
    const bv = await BenhVien.findById(benhVienId);
    const ThongBaonew = new ThongBao({
      TieuDe: "Đặt lịch thành công",
      NoiDung: `Bạn đã đặt lịch khám thành công vào lúc ${gioKham} ngày ${ngayKham} 
      tại bệnh viện ${bv.tenBenhVien} với bác sĩ ${bs.tenBacSi}
      `,
      UserId: userId,
    });

    await ThongBaonew.save();

    res.status(200).json({
      message: "Lichkham registered successfully",
      LichKham: saveLichKham,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};
//////////////////////////////////////////////////////////////////////////////////

// thong bao
module.exports.thongbao = async (req, res, next) => {
  try {
    const dataThongBao = await ThongBao.find();
    res.status(200).json({ data: dataThongBao });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// phieu kham

//nhan vien
// cap nhap thong tin nhan vien

//lay lai mat khau
module.exports.laylaimk = async (req, res, next) => {
  try {
    const { email, matkhau } = req.body;

    // Find the email in the database
    const Email = await TaiKhoan.findOne({ email });

    if (!Email) {
      return res.status(400).json("Email không tồn tại");
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(matkhau, salt);

    // Update the password in the database
    const updatedTK = await TaiKhoan.findOneAndUpdate(
      { email: email },
      { password: hashedPassword },
      { new: true, runValidators: true }
    );

    if (!updatedTK) {
      return res.status(500).json("Lỗi hệ thống");
    }

    // Send a successful response
    res.status(200).json("Request successful");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};
module.exports.getTT = async (req, res, next) => {
  try {
    const id = req.query.id;
    const data = await BenhNhan.findOne({ accountId: id }).populate(
      "accountId"
    );
    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};
module.exports.getTT2 = async (req, res, next) => {
  try {
    const id = req.query.id;
    const allTK = await TaiKhoan.find();
    const data = await TaiKhoan.findById(id);
    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

// get all lich kham and populate
module.exports.getLichKham = async (req, res, next) => {
  try {
    // new first
    const id = req.query.id;
    const data = await LickKham.find({ UserId: id })
      .populate("BenhNhanID")
      .populate("BacSiID")
      .populate("BenhVienID")
      .sort({ createdAt: -1 });

    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

// get all notification
module.exports.getThongBao = async (req, res, next) => {
  try {
    const id = req.query.id;
    const data = await ThongBao.find({ UserId: id }).sort({ createdAt: -1 });
    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};
