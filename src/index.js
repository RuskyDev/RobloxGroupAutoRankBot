const express = require("express");
const rbx = require("noblox.js");
const app = express();
const config = require("./config.json");

const groupId = config.groupId;
const cookie = config.cookie;

async function startApp() {
  await rbx.setCookie(cookie);
  const currentUser = await rbx.getCurrentUser();
  console.log("Bot Logged in as " + currentUser.UserName);
}

startApp();

app.get("/rank", async (req, res) => {
  const userId = req.query.userid;
  const rank = req.query.rank;

  try {
    await rbx.setRank(groupId, parseInt(userId), parseInt(rank));
    res.send(`Ranked: ${rank} to ${userId}`);
  } catch (error) {
    console.error("[!] An error occurred while ranking:", error);
    res.status(500).json({ error: "An error occurred while ranking" });
  }
});

const listener = app.listen(3000, () => {
  console.log("")
  console.log("API Started - Port 3000");
});
