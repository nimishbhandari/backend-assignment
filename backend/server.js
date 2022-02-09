import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const MODE = process.env.MODE;
app.listen(PORT, () => {
  console.log(`The server is running on ${PORT} in ${MODE} mode`);
});
