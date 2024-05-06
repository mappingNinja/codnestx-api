const mongoose = require("mongoose");
const url = process.env.MONGO_URl;

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(url);
    console.log("mongoDb connect to ---> ", connect.connection.host);
  } catch (err) {
    console.log("error in mongo db : ", err);
  }
};

module.exports = connectDb;
