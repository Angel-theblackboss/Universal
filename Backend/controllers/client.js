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



