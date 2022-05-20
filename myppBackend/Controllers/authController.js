import userModel from "../Models/userModel";
import bcrypt from "bcrypt";
import passport from "passport";

// SIGN UP //
export const signUp = async (req, res) => {
  let newUser = userModel(req.body);
  console.log("REQUEST BODY : " + req.body);
  let existantUser = await userModel.findOne({
    email: req.body.email,
  });
  console.log(existantUser);
  // check if email already exists
  if (existantUser) {
    console.log("User already exist with this email");
    res.status(404).json("User already exist with this email");
  } else {
    // Crypting password
    bcrypt.hash(req.body.password, 10).then((hash) => {
      newUser = userModel({
        nomComplet: req.body.nomComplet,
        email: req.body.email,
        password: hash,
        role: req.body.role,
      });
      // Adding account to db
      try {
        newUser.save();
        res.status(200).json(newUser);
      } catch (error) {
        res.status(400).json(error);
      }
    });
  }
};

// LOGIN //
export const login = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }

    if (!user) {
      console.log("info ====> " + info);
      return res.status(404).send(info);
    }

    req.logIn(user, function (err) {
      if (err) {
        console.log("ERRRRRROOOOOR");
        return res.status(404).send(err);
      }
      console.log("'nice : " + user);
      return res.status(200).json(user);
    });
  })(req, res, next);
};
