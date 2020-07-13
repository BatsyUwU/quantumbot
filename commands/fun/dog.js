const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");

module.exports = {
	name: "dog",
	description: "Sends a dog pic or gif",
	category: "fun",
	enabled: true,
	run: async (bot, message, args) => {
		let {body} = await superagent
		.get(`https://random.dog/woof.json`);

		let embed = new MessageEmbed()
		.setColor("RANDOM")
		.setTitle("woof grrrr")
		.setImage(body.url)
		return message.channel.send(embed);
	}
}
