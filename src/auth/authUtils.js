const JWT = require("jsonwebtoken");

const createTokenPair = (payload, publicKey, privateKey) => {
  const accessToken = JWT.sign(payload, publicKey, {
    expiresIn: "2 days",
  });

  const refreshToken = JWT.sign(payload, privateKey, {
    expiresIn: "7 days",
  });

  JWT.verify(accessToken, publicKey, (err, decode) => {
    if (err) {
      console.error(`error verify::`, err);
    } else {
      console.log(`decode verify::`, decode);
    }
  });

  return { accessToken, refreshToken };
};

module.exports = {
  createTokenPair,
};
