const Discord = require('discord.js');

module.exports.run = async (client, message) =>{

    var help_embed = new Discord.MessageEmbed()
        .setColor("7289DA")
        .setTitle("**__LISTE DE COMMANDES__**")
        .setDescription("Le préfixe **/** est à mettre avant chaque commande")
        .addField("help" , "Affiche cette commande")
        .addField("clear <nombre>" , "Supprime le nombre de message demandé")
        .setTimestamp()
        .setFooter("Created By NewToks#8330")
        message.channel.send(help_embed)
}

module.exports.help = {
    name: "help"
}
