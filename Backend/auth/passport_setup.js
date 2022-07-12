const passport = require("passport");

// Takes a piece of info from user and stores it into a unique cookie
passport.serializeUser(async function (user, done) {
  console.log(user);
  // Stores id into a cookie
  done(null, user._id);
});

// Takes a cookie from the browser and grabs the associated user using their id
passport.deserializeUser(async function (id, done) {
  done(null, false);
});
