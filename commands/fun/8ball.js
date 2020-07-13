const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "8ball",
  description: "randomly gives you chance of something",
  category: "fun",
  enabled: true,
  run: async (client, message, args) => {
    
    let question = message.content.slice(client.prefix.length + 6);
    
    if (!question) return message.channel.send(`what's your question?`);
    else {
      let responses = [
        "yep",
        "no ):",
        "definitely!",
        "absolutely",
        "not in a million years."
      ];
      
      let response = responses[Math.floor(Math.random() * responses.length)];
      const user = message.author;
      
      message.channel.send(new MessageEmbed()
          .setTitle("`🥥` 8 ball")
          .setColor("#a27b9d")
          .setThumbnail(client.user.displayAvatarURL())
          .addField(`${user.username}'s question:`, question)
          .addField('bot\'s reply:', response)
      )
    }
  }
};
