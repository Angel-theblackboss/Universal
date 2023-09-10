const express = require('express');
const router = express.Router();

const clientCtrl = require('../controllers/client');


router.post('/login-client', clientCtrl.login);

router.get("/",clientCtrl.getup)


module.exports = router;