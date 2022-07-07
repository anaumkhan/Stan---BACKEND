const mongoose = require("mongoose");

let Schema = mongoose.Schema;

/* Creators: they have a special log-in interface and only certain people can make an account (for MVP) */

let creatorSchema = new Schema({
  name: String,
  email: String,
});

let Creator = mongoose.model("Creator", creatorSchema);

module.exports = Creator;
