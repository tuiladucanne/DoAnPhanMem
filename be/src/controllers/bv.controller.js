const { successResponse, errorResponse } = require("../helpers");
const BacSi = require("../models/BacSi");
const BenhVien = require("../models/BenhVien");

const getAllBV = async (req, res) => {
  try {
    const benhVien = await BenhVien.find();
    return successResponse(req, res, benhVien);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
const getALlBS = async (req, res) => {
  try {
    const bacSi = await BacSi.find();
    return successResponse(req, res, bacSi);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

module.exports = {
  getAllBV,
  getALlBS,
};