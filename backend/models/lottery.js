const mongoose = require("mongoose");

let Schema = mongoose.Schema;

/*  Lottery: keeping track of all the live event lotteries for a creator */

let lotterySchema = new Schema({
  creator_id: String,
  is_active: Boolean,
  winner_user_id: String,
  ticket_list: [String],
  tickets: [String],
});

let Lottery = mongoose.model("lottery", lotterySchema);

module.exports = Lottery;
