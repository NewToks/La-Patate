const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
client.commands = new Discord.Collection()
const prefix = "."

const config = require("./config.json")

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

client.login(config.token)

client.on("guildMemberAdd" , member =>{
    member.guild.channels.cache.find(channel => channel.id === "725366058722131979").send(`Salut ${member} bienvenue sur le serveur !`)
})

client.on("guildMemberRemove" , member =>{
    member.guild.channels.cache.find(channel => channel.id === "725366058722131979").send(`${member} s'est barré avec un autre :pleading_face: le serveur est pas assez bien pour toi, c'est ca ? :rage:`)
})

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

    

