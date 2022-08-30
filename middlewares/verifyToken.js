// const jwt = require('jsonwebtoken');
// const { responseData } = require("../helpers/responseData");
// exports.verifyToken = (req, res, next) => {
//   let token;
//   if (
//     req.headers["authorization"] &&
//     req.headers["authorization"].startsWith("Bearer")
//   ) {
//     token = req.headers["authorization"].split(" ")[1];
//   }

//   if (!token) {
//     return res.json(responseData("NOT_AUTHORIZED", {}, req, false));
//   }
//   try {
//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//       if (err) {
//         // console.log(err.message)
//         // return res.json(responseData("TOKEN_EXPIRED", {}, 401, req,false));
//         return res.status(401).json({ success: false, message: "Token is expired", data: {} })
//       }
//       req.user = user.user;
//       next();
//     });
//   } catch (error) {
//     return res.json(responseData("NOT_AUTHORIZED", {}, req, false));
//   }
// };