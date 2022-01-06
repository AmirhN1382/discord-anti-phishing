const { ClientUser, Client } = require("discord.js");

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
        client.user.setActivity('Thinking', { type: 'WATCHING' });
	},
};