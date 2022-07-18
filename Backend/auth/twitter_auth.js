const express = require("express");
const axios = require("axios");
const FacebookStrategy = require("passport-twitter").Strategy;
const passport = require("passport");
var router = express.Router();
const dev_url = "http://localhost:3000/";

passport.use(
  new InstagramStrategy(
    {
      clientID: process.env.APPID,
      clientSecret: process.env.SECRET,
      callbackURL: "/twitter_auth/auth/twitter/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      var user = { ...profile, _id: profile.id };

      // Calls serialize user
      return done(null, user);
    }
  )
);

router.get("/", (req, res) => {
  return "";
});

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

module.exports = router;
