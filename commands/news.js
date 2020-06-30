const Discord = require('discord.js');

module.exports.run = async (client, message) =>{

    var news_embed = new Discord.MessageEmbed()
        .setColor("FF0000")
        /*.setThumbnail("#")*/
        .setTitle("**__NEWSLETTER__**")
        .setDescription("**Une catégorie RolePlay arrive prochainement sur le serveur**")
        .setTimestamp()
        .addField("Tu veux te désabonner de la newsletter ?", "Remonte tout en haut de ce salon")
        .setFooter("Created By NewToks#8330")
        message.channel.send(news_embed)
        message.delete();
}

module.exports.help = {
    name: "news"
}