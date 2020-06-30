const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
client.commands = new Discord.Collection()
const prefix = "."

const config = require("./config2.json")

fs.readdir('./commands/' , (err, f) => {
    if(err) console.log(err);
    console.log(`${f.length} commandes chargées`)
    let jsfile = f.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Aucune commande")
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        client.commands.set(props.help.name, props);
    })
})

fs.readdir('./events/' , (err , f) =>{
    if(err) console.log(err);
    console.log(`${f.length} events chargés`);
    let jsfile = f.filter(f => f.split(".").pop() === "js")
    jsfile.forEach((f, i) =>{
        const events = require(`./events/${f}`);
        const event = f.split(".")[0];

    client.on(event , events.bind(null, client));
    })
})

client.login(config.Token)

client.on(`message`, async message => {
    client.emit('checkMessage', message);

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let Args = messageArray.slice(1);
    var args = message.content.substring(prefix.length).split(" ");

    let commandFile = client.commands.get(cmd.slice(prefix.length));
    if(commandFile) commandFile.run(client, message, Args, args)
})
      
let stats = {
    serverID : '727480606685921300',
    total : '727563379643777135',
    member : '727563479157964971',
    bots : '727563556261986407'
}

client.on("guildMemberAdd" , member =>{
    var hall_embed = new Discord.MessageEmbed()
        .setColor("7289DA")
        .setTitle("**__BIENVENUE__**")
        .setDescription(`Salut ${member} bienvenue`)
        .setTimestamp()
        .setFooter("Created By NewToks#8330")
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total : ${member.guild.memberCount}`)
    client.channels.cache.get(stats.member).setName(`Humains : ${member.guild.members.cache.filter(m => !m.user.bot).size}`)
    client.channels.cache.get(stats.bots).setName(`Bots : ${member.guild.members.cache.filter(m => m.user.bot).size}`)
    member.guild.channels.cache.find(channel => channel.id === "727480606685921303").send(hall_embed)
})

client.on("guildMemberRemove" , member =>{
    var hall2_embed = new Discord.MessageEmbed()
        .setColor("7289DA")
        .setTitle("**__AU REVOIR__**")
        .setDescription(`${member} est parti(e)`)
        .setTimestamp()
        .setFooter("Created By NewToks#8330")
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total : ${member.guild.memberCount}`)
    client.channels.cache.get(stats.member).setName(`Humains : ${member.guild.members.cache.filter(m => !m.user.bot).size}`)
    client.channels.cache.get(stats.bots).setName(`Bots : ${member.guild.members.cache.filter(m => m.user.bot).size}`)
    member.guild.channels.cache.find(channel => channel.id === "727480606685921303").send(hall2_embed)
})

client.on('messageReactionAdd' , (reaction , user) =>{
    if(user.bot) return;
    let role = reaction.message.guild.roles.cache.find(x => x.name === "GTA");
    var member = reaction.message.guild.members.cache.find(member => member.id === user.id)

    member.roles.add(role.id)
    member.createDM().then(channel =>{
        channel.send(`**Le role ${role.name} t'a été ajouté**`)
    });
})

client.on('messageReactionRemove' , (reaction , user) =>{
    if(user.bot) return;
    var roleName = reaction.emoji.name
    var role = reaction.message.guild.roles.cache.find(role => role.name.toLocaleLowerCase() === roleName.toLocaleLowerCase());
    var member = reaction.message.guild.members.cache.find(member => member.id === user.id)

    member.roles.remove(role.id)
    member.createDM().then(channel =>{
        channel.send(`**Le role ${role.name} t'a été retiré**`)
    });
})

    

