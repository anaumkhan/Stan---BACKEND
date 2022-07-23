const express = require("express");
const axios = require("axios");
const TwitchStrategy = require("passport-twitch").Strategy;
const passport = require("passport");
var router = express.Router();
const dev_url = "http://localhost:3000/";

passport.use(
  new TwitchStrategy(
    {
      clientID: process.env.TWITCHCLIENTID,
      clientSecret: process.env.TWITCHSECRET,
      callbackURL: "/twitch_auth/auth/twitch/callback",
      scope: "user_read",
    },
    async function (accessToken, refreshToken, profile, done) {
      var user = { ...profile, _id: profile.id };

      // Calls serialize user
      return done(null, user);
    }
  )
);

router.get(
  "/auth/twitch",
  passport.authenticate("twitch", { forceVerify: true })
);
router.get(
  "/auth/twitch/callback",
  passport.authenticate("twitch", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect home
    if (process.env.NODE_ENV == "prod") {
    } else {
      res.redirect(dev_url);
    }
    res.send();
  }
);

module.exports = router;
