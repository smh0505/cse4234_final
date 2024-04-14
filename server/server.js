import express from "express";
import cors from "cors";
import { getDocs, migrate, start } from "./db.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors())
app.use(express.json());

app.post("/populate", async (_, res) => {
  const count = await migrate()
  res.send({
    success: count === 782,
    count
  })
})

app.get("/", async (_, res) => {
  res.send(await getDocs({}))
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  start()
})
