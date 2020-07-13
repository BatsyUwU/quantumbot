const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "help",
    aliases: ["h", "commands", "?"],
    category: "info",
    description: "Returns all commands, or one specific command info",
    usage: "[command | alias]",
    enabled: true,
    run: async (client, message, args) => {

        let categoryString = [];

        for (let com of client.commands.array()) {

            let msg = "";

            if(categoryString[com.category]) {
                msg = categoryString[com.category];

                msg += ";;" + com.name + "\n"; // edit the ";;" to have your bot prefix instead.
            } else {
                msg += ";;" + com.name + "\n"; // edit the ";;" to have your bot prefix instead.
            }

            categoryString[com.category] = msg;
        }

        const embed = new MessageEmbed()
            .setThumbnail('https://imgur.com/Or3WRee.gif')
            .setTitle('Help Menu')
            .setColor("#BBA2F7")

        for(let cat of client.categories) {
            embed.addField(cat, categoryString[cat], true);
        }

        message.channel.send(embed)
    }
} 