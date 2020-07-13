const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "cat",
  description: "sends a cat gif or image",
  category: "fun",
  enabled: true,
  run: async (bot, message, args) => {
    let { body } = await superagent.get(`http://aws.random.cat/meow`);

    let embed = new MessageEmbed()
      .setColor("#CCCCFF")
      .setTitle("meow")
      .setImage(body.file);

    return message.channel.send(embed);
  }
};
