const express = require('express');
const router = express.Router();

const cardCtrl = require('../controllers/card');


router.post('/login-card', cardCtrl.login);

router.get("/",cardCtrl.getup)


module.exports = router;