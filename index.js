const { Client, Collection, Util } = require("discord.js");
const { config } = require("dotenv");
const chalk = require("chalk");
const fs = require("fs");
const fetch = require("node-fetch");
const Discord = require("discord.js");
const { error } = require("console");
const databaseUtils = require("./Utils/DatabaseUtils.js");

const client = new Client({
  disableMentions: 'everyone'
});

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
client.prefix = ";;"; // can be changed - this is the bots prefix for commands.

client.on('rateLimit', (...args) => console.log('[RATELIMIT]', ...args));

client.on("warn", (...args) => console.warn('[WARN]', ...args));

var botStartedDontSend = true;

client.on("ready", async () => {
  console.log("Starting process WAKE UP...."); // logs that the bot is starting

// this is an auto changing status. you may customize this as you please
  const activities = [`hello!`, `quantumbot's github`];
  
  // set random activity first
  let activity = activities[Math.floor(Math.random() * activities.length)];
  client.user.setActivity(activity, { type: "WATCHING" }); // randomizing status
  
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(activity, { type: "WATCHING" });
  }, 60000);
  
  console.log(
    chalk.green.bgGreen.bold(
      `I am now online and ready to go!`
    )
  );
});

client.on("disconnect", () => {
  console.log(
    chalk.red.bgRed.bold(
      "i just disconnected, making sure you know, I will reconnect now..."
    )
  );
});

client.on("reconnecting", () => {
  console.log(chalk.yellow.bold("i am reconnecting now!"));
});

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

config({
  path: __dirname + "/.env"
});

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

function startLoadingBot() {
  client.login(process.env.TOKEN);
  console.log("Request sent to log in.");
}

startLoadingBot();
