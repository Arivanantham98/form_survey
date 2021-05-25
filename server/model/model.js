const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  gender: String,
  agegroup: String,
  source: String,
  channel: String,
  category: String,
  brand: String,
  article: String,
  youtube: String,
  language: String,
  referral: String,
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;

// email : {
//     type: String,
//     required: true,
//     unique: true
// },
