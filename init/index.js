const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

let MONGO_URL = 'mongodb://127.0.0.1:27017/wanderLust';

main()
    .then(() => {
        console.log("Connect to DB");
    })
    .catch((err) => {
        console.log(err);
    });
 async function main() {
    await mongoose.connect(MONGO_URL);
 };

const initDB = async () => {
  await Listing.deleteMany( {} );
  initData.data = initData.data.map((obj) => ({...obj, owner: "687f0f5c694963291b0140f7"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized"); 
};

initDB();


