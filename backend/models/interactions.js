const mongoose = require("mongoose");

let Schema = mongoose.Schema;

/* Interactions: anytime a user interacts with a social media platform to gain points */
let interactionsSchema = new Schema({
  platform: String,
  user_platform_id: String,
  creator_platform_id: String,
  type: String,
  timestamp: Number,
});

let Interactions = mongoose.model("Interactions", interactionsSchema);

module.exports = Interactions;
