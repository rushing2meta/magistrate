module.exports = {
	name: 'rules',
	description: 'Displays server rules.',
	execute(message) {
		const Discord = require('discord.js');
		const embed = new Discord.MessageEmbed()
			.setColor('#00fff0')
			.setTitle('Server Guidelines')
			.setDescription(`1. Spam:
      A. Sending a message with over 15 linebreaks (Large walls of text) that contributes nothing to chat.
      B. Rapidly sending 5 or more messages that contribute nothing to chat.
      C. Mass pinging users with messages or commands.
      D. Pinging users with no reasonable motive.
      E. Having loud/repetitive noises come from your microphone.
      F. Posting any valid Discord invites or links to social media without any valid context.

      2. System:
      A. Lying to users/staff with malicious intent.
      B. Encouraging users to break rules.
      C. Impersonating staff members with malicious intent.
      D. Unfairly punishing users in the server.
      E. Purposely using any bot's functionalities in an unintended manner.
      F. Rate limiting any bot in the server.
      G. Disobeying staff.
      H. Using any of the server's channels incorrectly. (Check all channel descriptions)

      3. Ban-able/blacklist-able Offenses:
      A. Evading, or attempting to evade punishments by using alternate accounts or leaving the server.
      B. Raiding our server.
      C. Using selfbots or scripts in the server.
      D. Excessive rule breaking.
      E. Threatening users in the server.
      F. Sending NSFW content in any non-NSFW channels.`);
		message.channel.send(embed);
	},
};
