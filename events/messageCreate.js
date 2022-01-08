const { ClientUser, Client } = require("discord.js");
const { Permissions } = require('discord.js');
const config = require('../config/config.json');
const { MessageEmbed } = require('discord.js');
const extractUrls = require('extract-urls');
const black_listed_words = require('../config/black_listed_words.json');
const blacklisted_domains_discord = require('../config/blacklisted_domains_discord.json');
const blacklisted_domains_steam = require('../config/blacklisted_domains_steam.json');
const sus_things_in_url = require('../config/sus_things_in_url.json');
const whitelisted_domains_discord = require('../config/whitelisted_domains_discord.json');
const whitelisted_domains_steam = require('../config/whitelisted_domains_steam.json');

blacklistDomainsRegex = [
    /(https?:\/\/)?(.+\.)?steemit\.com/i,
    /(https?:\/\/)?(.+\.)?stea?(rn|rm|m)c+[o0](m|rn)+unit+y\.ru/i,
    /(https?:\/\/)?(.+\.)?steamcornminuty\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?steamcommunityx\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?discord\.(?!com(\b)|gg(\b)|media(\b)|gift(\b)|gifts(\b)|me(\b)|new(\b)|co(\b))/i,
    /(https?:\/\/)?(.+\.)?discordapp\.(?!com(\b)|net(\b))/i,
    /(https?:\/\/)?(.+\.)?discordstatus\.(?!com(\b))/i,
    /(https?:\/\/)?(.+\.)?d[il17](sc|cs|s|c)[0o]\w{1,3}r(cl|d)app\.com\b/i,
    /(https?:\/\/)?(.+\.)?d[il17](sc|cs|s|c)[0o]\w{1,3}r(cl|d)app\.net\b/i,
    /(https?:\/\/)?(.+\.)?d[^i].?(sc|cs|s|c)[o0]+r?(cl|[db])\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?d[il17]+(sc|cs|s|c)[o0]+rd.{0,10}\.(gift[^s\W]\w{0,15}|gifts\w{1,15})/i,
    /(https?:\/\/)?(.+\.)?d[il17]+(cs|sc|s|c)[o0]+rdg[il1]ft[s5]?\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?d[il17]+(sc|cs|s|c)c?[o0]+r(cl|[db])-\w{1,20}\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?d[il17]+(sc|cs|s|c)ro(cl|[db])app\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?stea(m|n|nn).{0,4}d[il](sc|cs)[o0]r?(cl|[db])\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?nitro-?app-?store\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?d[il17]+(sc|cs|s|c)[o0]+r(cl|[db])[^a][^p]{2}\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?d[il17]+(sc|cs|s|c)[o0]+r(cl|[db])s?.{0,5}n[il17]t+r[o0]s?\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?d[il17]+(sc|cs|s|c)[0o]r\w(cl|d)\.\w{2,15}\b/i,
    /(https?:\/\/)?(.+\.)?d[il17]+(sc|cs|s|c)[o0]+cr?(cl|[db]).{0,15}\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?d[il17]+cs[o0]+r?(cl|[db])\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?d[il17]+(sc|cs|s|c)[^o]r?(cl|[db])\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?d[il17]+(sc|cs)[o0]+r?(cl|[db])[^s]\.\w{2,15}/i,
    /(https?:\/\/)?(.+\.)?g[il17]fts?-?d[il17]+(sc|cs|s|c)[o0]+r?(cl|[db])\w+\.\w{2,15}/i
];

function IsPhishing(text){
    let resp = {
        isFound: false
    };
    // Check for blacklisted words
    black_listed_words.forEach(function(blackListWord){
        if (text.toLowerCase().includes(blackListWord.toLowerCase())){
            resp.type = 'blacklist';
            resp.isFound = true;
            resp.reason = 'BlackListed Word Found';
            resp.similarTo = blackListWord;
            resp.text = text;
        }
    })
    if(resp.isFound) return resp;
    // Check for Blacklisted Discord Domains in Text
    blacklisted_domains_discord.forEach(function(blackListDomain){
        if (text.toLowerCase().includes(blackListDomain.toLowerCase())){
            resp.type = 'discord';
            resp.isFound = true;
            resp.reason = 'BlackListed Discord Domain Found';
            resp.similarTo = blackListDomain;
            resp.text = text;
        }
    })
    if(resp.isFound) return resp;
    // Check for Blacklisted Steam Domains in Text
    blacklisted_domains_steam.forEach(function(blackListDomain){
        if (text.toLowerCase().includes(blackListDomain.toLowerCase())){
            resp.type = 'steam';
            resp.isFound = true;
            resp.reason = 'BlackListed Steam Domain Found';
            resp.similarTo = blackListDomain;
            resp.text = text;
        }
    })
    if(resp.isFound) return resp;
    // Check For RegEx
    blacklistDomainsRegex.forEach(function(blregex){
        if(blregex.test(text)){
            resp.type = 'regex';
            resp.isFound = true;
            resp.reason = 'BlackListed Domain Found (( REGEX ))';
            resp.similarTo = `Regex: \`${blregex}\``;
            resp.text = text;
        }
    })
    if(resp.isFound) return resp;
    // Collect all Domains
    let DomainsInText = extractUrls(text);
    // Check Domains
    if(typeof DomainsInText !== 'undefined'){
        DomainsInText.forEach(function(domain){
            // Check if domain is in whitelist
            let IswhiteListed = false;
            whitelisted_domains_discord.forEach(function(discordOfficialDomain){
                if(domain.toLowerCase().startsWith(discordOfficialDomain)){
                    IswhiteListed = true;
                }
            })
            whitelisted_domains_steam.forEach(function(steamOfficialDomain){
                if(domain.toLowerCase().startsWith(steamOfficialDomain)){
                    IswhiteListed = true;
                }
            })
            if(!IswhiteListed){
                // Unknown Domain!
                sus_things_in_url.forEach(function(susThing){
                    if(domain.toLowerCase().includes(susThing.toLowerCase())){
                        resp.type = 'susURL';
                        resp.isFound = true;
                        resp.reason = 'Sus in Domain Thing Found';
                        resp.similarTo = susThing;
                        resp.susURL = domain;
                        resp.text = text;
                    }
                })
            }
            else{
                // Domain is in Whitelist
                console.log(`Domain is in Whitelist`);
            }

        })
    }
    return resp;
}

module.exports = {
	name: 'messageCreate',
	async execute(msg) {
        response = IsPhishing(msg.content);
        if(response.isFound){
            let msgLocation;
            if(msg.inGuild()) msgLocation = `<#${msg.channel.id}>`;
            else msgLocation = `DM (( **Original Message HyperLink Wont Work** ))`;
            const WarningEmbed = new MessageEmbed()
                .setColor('RED')
                .setTitle('🔴 Found Something')
                .setTimestamp()
                .setFooter('Do not Enter Phishing Links!');
            if(response.type != 'susURL'){
                // Time out User
                if(msg.inGuild()){
                    if(msg.guild.me.permissions.has([Permissions.FLAGS.MANAGE_MEMBERS]) && msg.member.manageable)
                        msg.member.timeout(1440 * 60 * 1000, `AntiPhishing: ${response.reason}`);
                    else{
                        WarningEmbed.addField(`\u200B`, `\u200B`);
                        WarningEmbed.addField(`🚨 ATTENTION 🚨`, `**I don't have the permission to timeout FIX IT ASAP and Timeout/Ban This User Yourself!**`);
                    }

                    // Delete Message / Original Message hyperlink wont work anymore
                    if(msg.guild.me.permissions.has([Permissions.FLAGS.MANAGE_MESSAGES]))
                        msg.delete();
                    else
                        console.log(`I don't have the permission to delete the message!`);
                }
                else{
                    await msg.client.guilds.fetch(config.guildId)
                        .then(guild => {
                            guild.members.fetch(msg.author.id)
                                .then(member => {
                                    if(member.guild.me.permissions.has([Permissions.FLAGS.MANAGE_MEMBERS]) && member.manageable)
                                        member.timeout(1440 * 60 * 1000, `AntiPhishing: ${response.reason}`);
                                    else{
                                        WarningEmbed.addField(`\u200B`, `\u200B`);
                                        WarningEmbed.addField(`🚨 ATTENTION 🚨`, `**I don't have the permission to timeout FIX IT ASAP and Timeout/Ban This User Yourself!**`);
                                    }
                                })
                        })
                }
                WarningEmbed.description =  `**👤 Suspicious:** ${msg.author.tag} - <@${msg.author.id}>\n`+
                                            `**👓 Type Of Phishing:** ${response.type}\n`+
                                            `**❓ Reason:** ${response.reason}\n`+
                                            `**📍 Similar To:** ${response.similarTo}\n`+
                                            `**[📝 Original Message](${msg.url}):** \`\`\`${msg.content}\`\`\`\n`+
                                            `**🌍 Location:** ${msgLocation}`;
            }
            else{
                WarningEmbed.color = 'ORANGE';
                WarningEmbed.title = '🟠 Found Something Suspicious in a URL';
                WarningEmbed.description =  `*** I Did not Take ANY Action!! Cuz it could be false-positive! Check it out yourself!!!***\n`+
                                            `**👤 Suspicious:** ${msg.author.tag} - <@${msg.author.id}>\n`+
                                            `**🔗 URL:** ${response.susURL}\n`+
                                            `**📍 Reason:** Found \`${response.similarTo}\` In URL!\n`+
                                            `**[📝 Original Message](${msg.url}):** \`\`\`${msg.content}\`\`\`\n`+
                                            `**🌍 Location:** ${msgLocation}`;
            }
            await msg.client.channels.fetch(config.BotSetting.logChannel)
            .then(channel => {
                channel.send({embeds: [WarningEmbed]});
            })
        }
	},
};