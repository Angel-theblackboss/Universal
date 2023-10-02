const express = require('express');
const router = express.Router();

const compteCtrl = require('../controllers/compte');


router.post('/login-compte', compteCtrl.login);

router.get("/",compteCtrl.getup)


module.exports = router;