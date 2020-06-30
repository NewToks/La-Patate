const Discord = require('discord.js');

module.exports = async(client) =>{
    client.user.setPresence({
        activity: {
            name: ".help /v1 /by NewToks#8330"
        }
    })
};