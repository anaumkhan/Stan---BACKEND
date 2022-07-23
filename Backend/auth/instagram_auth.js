const express = require("express");
const axios = require("axios");
const InstagramStrategy = require("passport-instagram").Strategy;
const passport = require("passport");
var router = express.Router();
const dev_url = "http://localhost:3000/";

passport.use(
  new InstagramStrategy(
    {
      clientID: process.env.IGAPPID,
      clientSecret: process.env.IGSECRET,
      callbackURL: "/instagram_auth/auth/instagram/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      var user = { ...profile, _id: profile.id };

      // Calls serialize user
      return done(null, user);
    }
  )
);

router.get(
  "/auth/instagram",
  passport.authenticate("instagram", { forceVerify: true })
);
router.get(
  "/auth/instagram/callback",
  passport.authenticate("instagram", { failureRedirect: "/" }),
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
