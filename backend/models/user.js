const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  email: String,
  instagram_user_id: String,
});

let User = mongoose.model("Users", userSchema);

exports.default = User;
