import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

import cors from "cors";
import express from "express";
import { db } from "./src/db/db";
import bcrypt from "bcrypt";
import { config } from "./src/config/config";
import { checkAuth } from "./src/utils/auth";
const app = express();
const port = 5006;
app.use(cors());
app.use(express.json());

app.get("/menuCategories", checkAuth, async (req, res) => {
  const menuCategoriesResult = await db.query("SELECT * FROM menu_categories");
  res.send(menuCategoriesResult.rows);
});

app.get("/menus", checkAuth, async (req, res) => {
  const result = await db.query("SELECT * FROM menus ");
  res.send(result.rows);
});

app.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.sendStatus(400);

  const hashedPassword = await bcrypt.hash(password, 10);

  const text =
    "INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *";
  const values = [name, email, hashedPassword];

  try {
    const result = await db.query(text, values);
    const userInfo = result.rows[0];
    delete userInfo.password;
    res.send(userInfo);
  } catch (error) {
    console.log(error);
    res.send(500);
  }
});

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) return res.sendStatus(400);

  const userResult = await db.query("select * from users where email = $1", [
    email,
  ]);

  if (!userResult.rows.length) return res.sendStatus(401);

  const user = userResult.rows[0]; //{id,name,email,pass}
  const hashedPassword = user.password;
  delete user.password; //{id,name,email}

  const isCorrectPassword = await bcrypt.compare(password, hashedPassword); //1234 -- db retrewtgwert

  if (isCorrectPassword) {
    const accessToken = jwt.sign(user, config.jwtSecret); //erewreqwr.adfdafdfasd.asdfdsafas
    return res.send({ accessToken });
  }
  return res.sendStatus(401);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
