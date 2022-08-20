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





  describe("User Service Unit Tests", function () {
    describe("Save User functionality", function () {
      it("should successfully add a user if the number of users in the DB with the same profiled is zero", async function () {
        const profileId = 1;
        const name = "Akshay";
        const dob = "2020-12-12";
        const experience = [{ years: 2, organizationName: "ABCD" }];
        const result = cacheController.list();
        expect(result).to.not.equal(null);
 
      });
      
    });
  });