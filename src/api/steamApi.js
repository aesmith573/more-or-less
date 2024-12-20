import express from "express";
import axios from "axios";
import env from "dotenv";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

env.config({ path: 
  path.resolve(__dirname,
    "../../.env"
  )});

const apiKey = process.env.STEAM_API_KEY;

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Now listening on port: ${port}`);
})