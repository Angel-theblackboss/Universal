const Client = require('../models/client');


exports.login = async (req, res) => {
  const { number, password } = req.body;

  try {
    const oldClient = await Client.findOne({ number });

    if (oldClient) {
      return res.json("exist");
    }
      await Client.create({
      number: number,
      password: password,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
};

exports.getup = async (req, res) => {

  try {
    const oldClient = await Client.find({});

    
    res.status(200).json({
      data : oldClient,
    });
  } catch (error) {
    console.log(error);
  }
};


