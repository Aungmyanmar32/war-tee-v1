import cors from "cors";
import express from "express";
const app = express();
const port = 5006;
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));