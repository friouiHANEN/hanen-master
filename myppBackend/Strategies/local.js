import LocalStrategy from "passport-local";
import userModel from "../Models/userModel";
import bcrypt from "bcrypt";

import passport from "passport";
passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (user, done) {
  userModel
    .findOne({
      email: user.email,
    })
    .then((user) => {
      if (user) {
        done(null, user);
      }
    });
});

// CALLING PASSPORT AND SETTING THE STRATEGY
passport.use(
  new LocalStrategy(
    { usernameField: "email" },

    async (email, password, done) => {
      // getting user //
      let user = await userModel
        .findOne({
          email: email,
        })
        .then((user) => {
          if (user) {
            console.log(`User ${user.email} `);
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) {
                throw err;
              } else if (isMatch) {
                done(null, user);
              } else {
                done(null, false, { message: "Wrong Password" });
              }
            });
          } else {
            done(null, false, { message: "No user with this email" });
          }
        });
    }
  )
);
