const Discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    if(!message.guild.member(message).hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas les permissions").catch(console.error);

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas la permission").catch(console.error);

    if(!args[0]) return message.channel.send("OK, et j'en supprime combien ?");

    if(isNaN(args[0])) return message.channel.send('Un **nombre** plz');

    message.channel.bulkDelete(args[0]);

    message.channel.send(`**${args[0]} messages supprimés**`)
    .then((message) => {
        setTimeout(function() {
        message.delete();
      }, 3000)});  }
    

module.exports.help = {
    name: "clear"
}