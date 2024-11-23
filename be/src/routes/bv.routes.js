
let router = require('express').Router();
const { getAllBV, getALlBS } = require('../controllers/bv.controller');
router.get('/bs', getALlBS);
router.get('/bv', getAllBV);

module.exports = router;
