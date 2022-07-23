require("dotenv").config();

const cors = require("cors");
const bodyParser = require("body-parser");

const express = require("express");

const mongoose = require("mongoose");

const User = require("./models/user");
const Creator = require("./models/creator");
const Interactions = require("./models/interactions");
const Currency = require("./models/currency");
const Items = require("./models/items");
const Lottery = require("./models/lottery");
const Tickets = require("./models/tickets");
const order = require("./models/order");
const cookieSession = require("cookie-session");
const axios = require("axios");

const passport_setup = require("./auth/passport_setup");

const facebook_auth = require("./auth/facebook_auth");

const instagram_auth = require("./auth/instagram_auth");

const twitter_auth = require("./auth/twitter_auth");

const twitch_auth = require("./auth/twitch_auth");

const session = require("express-session");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// keys stores the keys used to encrypt cookies
app.use(
  session({
    secret: [process.env.COOKIE_KEY],
    secure: false, // must be true if sameSite='none',
    resave: true,
    cookie: { secure: false },
  })
);

app.use("/facebook_auth", facebook_auth);
app.use("/instagram_auth", instagram_auth);
app.use("/twitter_auth", twitter_auth);
app.use("/twitch_auth", twitch_auth);

let mongoDB = `mongodb+srv://anaum:${process.env.MONGOPW}@cluster0.5newcfu.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/* Created a single GET request handler at the / endpoint to respond to all GET requests with a JSON object and a 200 status code. 
The JSON response contains a single key of ping that stores the string value: pong. */
app.get("/", (req, res) => {
  res.status(200).send({ ping: "pong" });
});

// Create a new user
app.post("/users", async (req, res) => {
  // Create an instance of model
  let newUserData = new User({ name: "Anaum", email: "Khan" });
  const newUser = await newUserData.save();
  console.log("New User Saved" + newUser._id);
});

// Find a user by their name
app.get("/users/:name", async (req, res) => {
  // Create an instance of model
  let users = User.find({ name: req.params.name });

  if (users != null && users.length > 0) {
    res.send({ users: users });
  } else {
    // No users found
    res.send({ users: null });
  }
});

app.get("/twitter_likes", async function (req, res) {
  console.log("WHATS UP");
  const config = {
    headers: { Authorization: `Bearer ${process.env.TWITTERTOKEN2}` },
  };
  try {
    const results = await axios.get(
      "https://api.twitter.com/2/tweets/1549661219224576000/liking_users?max_results=10",
      {},
      config
    );
    res.send(results.data);
  } catch (e) {
    console.log(e);
  }
});

// app.use("/creator", creator);

module.exports = app;
