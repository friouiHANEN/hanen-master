import { Router } from "express";
import { login, signUp } from "../Controllers/authController";

const usersRoutes = Router();

usersRoutes.get("/", (req, res) => {
  res.status(200).send("Hello");
});
usersRoutes.post("/new", signUp);
usersRoutes.post("/login", login);

export default usersRoutes;
