const mongoose = require("mongoose");
async function initialize(msg) {
    try {
        const srv = "mongodb+srv://admin:Opm4pyUt77Me1lIl@clusterreactmanagement.ofyhjer.mongodb.net/?retryWrites=true&w=majority"
        console.log({ srv })
        await mongoose.connect(srv,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        console.log("+ MongoDB is connected!! +", srv)
    } catch (error) {
        console.error(error);
    }
}

module.exports.initialize = initialize;