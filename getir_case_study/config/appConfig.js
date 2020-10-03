const mongoose = require("mongoose");

var appConfig = {
    baseConfig: {
        'mongoDB' : 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study'
    },
    mongooseConnection: () => {

        mongoose.connect("mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study", { retryWrites: true});

        mongoose.connection.on('open', () => {
            console.log(`Connected to ${appConfig.baseConfig.mongoDB} address successfully..`);
        });

        mongoose.connection.on('error', (err) => {
            console.error(`Error occured when trying to connect DB: ${err.message}`);
        });

        mongoose.Promise = global.Promise; 
    }
}

module.exports = appConfig;