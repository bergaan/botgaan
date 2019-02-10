const discord = require('discord.js');
const client = new discord.Client();
var prefix = "?";

client.login(process.env.TOKEN);

client.on('message', message =>{
    if(message.content == "Tu fais quoi ?"){
        message.channel.sendMessage("Je me branle <:gne:543912482654257182>");
        console.log('repond a tfq');
    }
})

client.on('guildMemberAdd', member =>{
    member.guild.channel.get("<#485860427230871583>").send("Salut fils de pute.");
    console.log("+1 user");
})

client.on('message', message =>{
    if(message.content == "embed"){
        let embed = new discord.RichEmbed()
            .setTitle('Hmmm')
            .setDescription('Wowowowwo')
            .setFooter('Calme-toi.')
        message.channel.sendMessage(embed);
    }
});
