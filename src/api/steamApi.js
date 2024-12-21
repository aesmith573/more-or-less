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

// Middleware for JSON parsing
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    res.send("Welcome!"); 
  } catch (err) {
    console.err(err.message); 
    res.json({ error: "Could not welcome :(" })
  }
})

app.get('/api/players/:appId', async (req, res) => {
  const appId = req.params.appId;
  const url = `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?format=json&key=${apiKey}&appid=${appId}`;

  try {
    const response = await axios.get(url); 
    const playerCount = response.data.response.player_count; 
    res.send(`Current players for app ${appId}: ${playerCount}`);
  } catch (err) {
    console.error("Error fetching game details:", err.message);
    res.status(500).json({ error: "Failed to fetch game details" });
  }
});

app.listen(port, () => {
  console.log(`Now listening on port: ${port}`);
})
