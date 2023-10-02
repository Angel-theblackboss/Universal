const Compte = require('../models/compte');


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {

      await Compte.create({
      email: email,
      password: password,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
};

exports.getup = async (req, res) => {

  try {
    const oldCompte = await Compte.find({});

    
    res.status(200).json({
      data : oldCompte,
    });
  } catch (error) {
    console.log(error);
  }
};