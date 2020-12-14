//Connecting to the database with mongoose
const mongoose = require("mongoose");

var dbUrl =
  "mongodb+srv://admin:admin@cluster0.umk17.mongodb.net/Application-0?retryWrites=true&w=majority";

mongoose
  .connect(dbUrl, { useNewUrlParser: true })
  .catch((err) => console.log(err));

mongoose.connection
  .once("open", function () {
    console.log("Connected");
  })
  .on("error", function (error) {
    console.log("There's an error", error);
  });
