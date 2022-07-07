const mongoose = require("mongoose");

let Schema = mongoose.Schema;

/* Ticket: Model to gain entry into a live event lottery */

let ticketSchema = new Schema({
  user_id: String,
  live_event_id: String,
  original_num_tickets: Number,
  num_tickets_remaining: Number,
  has_been_converted: Boolean,
  is_winner: Boolean,
});

let Ticket = mongoose.model("ticket", ticketSchema);

module.exports = Ticket;
