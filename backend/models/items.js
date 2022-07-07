const mongoose = require("mongoose");

let Schema = mongoose.Schema;

/* Items: defines the items listed as available for purchase in the Stan Shop */

let itemsSchema = new Schema({
  creator_id: Number,
  name: String,
  description: String,
  num_of_points: Number,
  image_name: String,
  is_live_only: Boolean,
});

let Items = mongoose.model("Items", itemsSchema);

module.exports = Items;
