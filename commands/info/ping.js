const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "Returns bot ping and user ping.",
    category: "info",
    enabled: true,
    run: async (client, message, args) => {
        let channel = message.channel;
        let author = message.author;

        

        channel.send("Pong! Calculating my ping...")
            .then(message2 => {

                var ping = Math.round(Date.now() - message2.createdTimestamp) + "ms";

                const embed = new MessageEmbed()
                .setColor("#dcc3ff")
                .setTitle("Ping Calculator")
                .addFields(
                    { name: "My ping (Latency)", value: Math.round(client.ws.ping) + "ms"},
                    { name: "Your ping", value: ping},
                )
                .setTimestamp()
                .setFooter('Command executed by: ' + author.username, author.avatarURL());

                message2.edit("", embed);
            })
            .catch("Error occurred calculating ping");

    
    }
}
