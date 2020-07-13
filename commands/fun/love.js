const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "love",
    aliases: ["affinity" , "ship"],
    category: "fun",
    description: "calculates the love affinity you have for another person.",
    usage: "[mention | id | username]",
    enabled: true,
    run: async (client, message, args) => {

      
        let mentioned = message.mentions.users.array();
      
        // 101 - 1 allows for love to be 0
        let love = (Math.round(Math.random() * 101) - 1);
        let loveIndex = Math.floor(love / 10);
        let loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);
      
        if(args.length > 1) {
            message.channel.send("Too many arguments!");
            return;
        }

      
        if (args.length == 1 && mentioned.length == 1) {
            let embed = new MessageEmbed()
                .setColor("#ffb6c1")
                .addField("☁ **" + mentioned[0].username + "** loves **" + message.member.displayName + "** this much:", "💟 " + Math.floor(love) + "%\n\n" + loveLevel);
            message.channel.send(embed)
        } else {
          
          let guildMembersArray = message.guild.members.cache.array();
          
          let randomUser = guildMembersArray[Math.floor(Math.random() * guildMembersArray.length)];
          
          console.log(guildMembersArray);
          console.log(randomUser);
          
          const love = Math.random() * 100;
          const loveIndex = Math.floor(love / 10);
          const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

          const embed = new MessageEmbed()
              .setColor("#ffb6c1")
              .addField("☁ **" + randomUser.nickname + "** loves **" + message.author.username + "** this much:", "💟 " + Math.floor(love) + "%\n\n" + loveLevel);

          message.channel.send(embed);
        }
    }
}
