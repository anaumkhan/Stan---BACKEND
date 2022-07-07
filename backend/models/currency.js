const mongoose = require("mongoose");

let Schema = mongoose.Schema;

/* Currency: Points earned by user for engaging with a creators content */

let currencySchema = new Schema({
  user_id: Number,
  creator_id: Number,
  interaction_id: String,
  payment_id: String,
  orginal_number_of_points: Number,
  number_of_points_remaining: Number,
});

let Currency = mongoose.model("Currency", currencySchema);

module.exports = Currency;
