const mongoose = require("mongoose");

let Schema = mongoose.Schema;

/* Orders: an order that a user made for an item at the Stan Shop (every transaction) */

let orderSchema = new Schema({
  timestamp: Number,
  item_id: String,
  user_id: String,
  creator_id: String,
  is_fulfilled: Boolean,
});

let Order = mongoose.model("Order", orderSchema);

module.exports = Order;
