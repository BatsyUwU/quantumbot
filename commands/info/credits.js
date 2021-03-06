const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "credits",
    aliases: ["creds"],
    category: "info",
    description: "Shows bot credits.",
    enabled: true,
    run: async (client, message, args) => {
        //return message.channel.send("bot hosted and coded by bea#0001");
        const embed = new MessageEmbed()
                .setThumbnail('https://imgur.com/Or3WRee.gif')
                .setTitle("Credits")
                .setDescription('Programmed by: bea#0001.\n Published at https://github.com/beanini/quantumbot')
                .setColor("#BBA2F7")
                .setFooter('Bot Github: https://github.com/beanini/quantumbot')
                .setTimestamp();

            message.channel.send(embed)
    }
}