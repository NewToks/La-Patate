const Discord = require('discord.js');
const { create } = require('domain');

module.exports = async(client) => {
    let connectés = message.guild.members.filter(({ presence }) => presence.status !== 'offline').size;
        var server = message.guild;
    
        server.createChannel(connectés);
    }
