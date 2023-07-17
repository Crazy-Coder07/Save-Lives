const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.green
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.red);
  }
};

module.exports = connectDB;
