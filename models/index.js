const mongoose = require("mongoose");
async function initialize(msg) {
  try {
    const srv =
      process.env.ENV === "live"
        ? process.env.MONGO_LIVE
        : process.env.MONGO_STAGE;
    console.log({ srv });
    await mongoose.connect(srv, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("+ MongoDB is connected!! +", srv);
  } catch (error) {
    console.error(error);
  }
}

module.exports.initialize = initialize;
