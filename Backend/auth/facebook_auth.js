const express = require("express");
const axios = require("axios");
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
var router = express.Router();
const dev_url = "http://localhost:3000/";

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.APPID,
      clientSecret: process.env.SECRET,
      callbackURL: "/facebook_auth/auth/facebook/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
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
  "/auth/facebook",
  passport.authenticate("facebook", { forceVerify: true })
);
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  function (req, res) {
    console.log("Print Data for video demonstration");
    console.log(req.cookies);
    console.log(req.body);

    // Sending user profile to frontend
    console.log("User data");
    console.log(req.user);

    // Successful authentication, redirect home
    if (process.env.NODE_ENV == "prod") {
    } else {
      res.redirect(dev_url);
    }
    res.send();
  }
);

module.exports = router;
