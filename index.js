const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message],
});

client.once('ready', () => {
  console.log(`Anti-. bot connecté sur ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes('.')) {
    message.reply('On ne dit pas **"."** ! C\'est méchant ! ❌');
  }
});

client.login('token'); // met ton token ici
