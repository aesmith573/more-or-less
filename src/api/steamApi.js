import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.VITE_STEAM_API_KEY;
console.log(`API Key: ${apiKey}`);


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Now listening on port: ${port}`);
})