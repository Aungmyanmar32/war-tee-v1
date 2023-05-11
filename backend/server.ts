import cors from "cors";
import express from "express";
import { db } from "./src/db/db";
const app = express();
const port = 5006;
app.use(cors());
app.use(express.json());

app.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.sendStatus(400);

  const text =
    "INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *";
  const values = [name, email, password];

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
