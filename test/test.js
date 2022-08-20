const { cacheController } = require("../controller/cacheController");
const { expect } = require("chai");
const mongoose = require("mongoose");

mongoose.connect(
    `mongodb+srv://fashioncloud:bora123jbora@cluster0.lmmedmv.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", async function () {
    console.log("Connected successfully");
  });




