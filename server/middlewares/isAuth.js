const jwt = require("jsonwebtoken");

// verify token
exports.verify = (req, res, next) => {
  // GET Auth Header value
  const bearerHeader = req.headers["authorization"];
  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //split at the space
    const bearer = bearerHeader.split(" ");
    // Get Token
    const bearerToken = bearer[1];

    //set token
    req.token = bearerToken;

    //next Middlewre
    next();
  } else {
    res.sendStatus(403);
  }
};

exports.signed = async payload => {
  let token = await jwt.sign(payload, "secretkey");
  payload.token = token;
  return payload;
};
