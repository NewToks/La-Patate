const Discord = require('discord.js')

module.exports.run = async (client , message, args) =>{

    message.delete()

    let codes_embed = new Discord.MessageEmbed()
    .setTitle('**__CERTIFICATION__**')
    .setColor('RED')
    .setDescription('Bienvenue !')
    .addField('Voila, vous êtes prêt à entrer sur le serveur' , "Il ne vous reste qu'à cocher le react pour accéder au serveur")
    .setTimestamp()
    .setFooter("Created By NewToks#8508")

    message.channel.send(codes_embed).then(async message =>{
        message.react("727564492833030216")
    })
}

module.exports.help = {
    name : "verif"
}
