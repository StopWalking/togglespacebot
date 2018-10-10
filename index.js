const discord = require("discord.js");
const config = require("./config.json");
const client = new discord.Client();

client.on("ready", async () => {
    console.log(`ToggleSpace = Online`);
    client.user.setActivity("youtube.com/togglespace", {type: "WATCHING"});
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === `dm`) return;

    var prefix = config.prefix;
    var messageSplit = message.content.split(" ");
    var cmd = messageSplit[0];
    var args = messageSplit.slice(1);

    if (cmd === `${prefix}bot`) {
        if(args[0] === `test`) {
            return message.channel.send(`Dit is een test`)
        }
    }
});

client.login(process.env.BOT_TOKEN);
