const express = require("express");
const axios = require("axios");
const TwitterStrategy = require("passport-twitter").Strategy;
const passport = require("passport");
var router = express.Router();
const dev_url = "http://localhost:3000/";

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTERKEY,
      consumerSecret: process.env.TWITTERSECRET,
      callbackURL: "/twitter_auth/auth/twitter/callback",
      scope: "read",
    },
    async function (accessToken, refreshToken, profile, done) {
      var user = { ...profile, _id: profile.id };

      // Calls serialize user
      return done(null, user);
    }
  )
);

router.get(
  "/auth/twitter",
  passport.authenticate("twitter", { forceVerify: true })
);
router.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect home
    if (process.env.NODE_ENV == "prod") {
    } else {
      res.redirect(dev_url);
    }
    res.send();
  }
);

router.get("/twitter_likes", async function (req, res) {
  console.log(process.env.TWITTERTOKEN);
  const config = {
    headers: { Authorization: `Bearer ${process.env.TWITTERTOKEN}` },
  };
  const results = await axios.get(
    "https://api.twitter.com/2/tweets/1549661219224576000/liking_users?max_results=10",
    config
  );
  console.log(results.data);
  res.send(results.data);
});

module.exports = router;
