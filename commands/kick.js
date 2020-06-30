const Discord = require('discord.js')
module.exports.run = async (client , message , args) =>{

    if(!message.member.hasPermission('KICK_MEMBERS'))
    message.channel.send("Désolé, tu n'as pas le droit")
    else {
        let member = message.mentions.members.first();
        if(member){
            try{
                await member.kick();
                console.log('Kicked');
                message.channel.send(`${member}, s'est fait kick, les autres, ne faites pas comme lui`)
            }
            catch(err) {
                console.log(err);
            }
        }
    }
    
}
module.exports.help = {
    name: "kick"
}