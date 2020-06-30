const Discord = require('discord.js');

module.exports.run = async (client, message) =>{

    var help_embed = new Discord.MessageEmbed()
        .setColor("7289DA")
        /*.setThumbnail("#")*/
        .setTitle("**__LISTE DE COMMANDES__**")
        .setDescription("Le préfixe **.** est à mettre avant chaque commande")
        .addField("rien pour l'instant")
        .setTimestamp()
        .setFooter("Created By NewToks#8330")
        message.channel.send(help_embed)
}

module.exports.help = {
    name: "help"
}