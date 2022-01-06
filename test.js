const extractUrls = require("extract-urls");

userChat = `Salam, https://google.com/app va http://masterking32.com`;

blacklistWordsDiscord = [
    'Gifts for the new year',
    'nitro for 3 months from Steam',
    '1 month nitro for free, take it :)',
    'Get Discord Nitro for Free from Steam Store',
    'Free 3 months Discord Nitro',
    'Personalize your profile, screen share in HD, upgrade your emojis, and more.',
    'Click to get Nitro',
    'airdrop discord nitro',
    'steam gived nitro for the new year',
    'Take Discord Nitro',
];

susThingsInURL = [
    'nitro',
    'gift',
    'disc',
    'ord',
    'discord',
    'redeem',
    'tradeoffer'
]

blacklistDomainsDiscord = [
    'discord-to.com',
    'discordgift.site',
    'dis.cord.gifts',
    'dicordglfts.ga',
    'dicsord-gift.com',
    'dicsord-present.ru',
    'dicsordgift.club',
    'dicsordgift.com',
    'dicsordgifts.com',
    'diiscord-app.ru',
    'disccord-club.com',
    'disccord-gift.com',
    'disccord.ru',
    'disccords.com',
    'discocrd-app.net',
    'discocrd-gift.com',
    'discorde-gift.com',
    'discocrd-gifts.com',
    'discocrdapp.com',
    'discocrdapp.net',
    'discorcd-apps.com',
    'discorcl.org',
    'discorclgift.net.ru',
    'discord-airdrop.com',
    'discord-app.net',
    'discord-full.shop',
    'discord-get.click',
    'discord-gg.com',
    'discord-gift.click',
    'discord-gift.com',
    'discord-gift.net',
    'discord-gift.ru',
    'discord-give.com',
    'discord-informations.ru',
    'discord.birth',
    'discord.glfte.com',
    'discordappnittro.com',
    'discordc.gift',
    'discordg.com.ru',
    'discordg.link',
    'discordgift.click',
    'discordgift.com',
    'discordgift.net',
    'discordgift.ru',
    'discordgifts.com',
    'discordn.gift',
    'discordnltro.xyz',
    'discort-nittro.com',
    'discrod-gifts.club',
    'discrodapp.ru',
    'disocrd-gift.ru',
    'disordsnitros.gifts',
    'dliscord.com',
    'dliscordnltro.com',
    'dliscords.com',
    'dlisocrd.ru',
    'dlsccord-apps.club',
    'dlscocl.xyz',
    'dlscorcl.gift',
    'dlscord-app.com',
    'dlscord-apc.ru',
    'dlscord-glft.me',
    'dlscord-nitro.link',
    'dlscord-store.club',
    'dlscord.app',
    'dlscord.click',
    'dlscord.com',
    'dlscord.link',
    'dlscord.net',
    'dlscord.ru',
    'dlscord.xyz',
    'dlscordniltro.com',
    'dlscordnitro.gift',
    'dlscordrglft.xyz',
    'dlscorld.gift',
    'dlscorld.gifts',
    'dlscrod-app.xyz',
    'dlsocrd.online',
    'boostnltro.com',
    'gift-discords.com',
    'clck.ru/',
    'nitro-ds.com',
    'nitro-full.xyz',
    'nitro-gg.xyz',
    'gift-discordbe.com',
    'discopd.com',
    'dfscord-app.club',
    'discord-to.com',
];

// regex will be stored in js file


whitelistDomainsDiscord = [
    'https://discord.com',
    'https://discord.co',
    'https://discord.gg',
    'https://discord.media',
    'https://discord.gift',
    'https://discord.new',
    'https://discordapp.com',
    'https://discordapp.net',
    'https://discordstatus.com',
    'https://dis.gd',
    'https://discord.gifts',
    'https://watchanimeattheoffice.com',
    'https://discordservers.com',
    'https://discords.com',
    'https://disboard.org',
    'https://discord.me'
];

blacklistDomainsSteam = [
    'steam-discord.com',
    'steam-dlscord.com',
    'steamcommunity.app',
    'steamcommunity.click',
    'steamcommunity.gift',
    'steamcommunity.link',
    'steamcommunity.link',
    'steamcommunity.net',
    'steamcommunity.online',
    'steamcommunity.org',
    'steamcommunity.ru',
    'steamcommunity.site',
    'steamcommunity.xyz',
    'steamccommunitty.ru',
    'steamccommunity.ru',
    'steamccomunitty.ru',
    'steamccomunity.ru',
    'steamcommunitty.ru',
    'steamcomunitty.ru',
    'steamcomunity.ru',
    'stearmccommunitty.ru',
    'stearmccommunity.ru',
    'stearmccomunitty.ru',
    'stearmccomunity.ru',
    'stearmcommunitty.ru',
    'stearmcommunity.ru',
    'stearmcomunitty.ru',
    'stearmcomunity.ru',
    'stearnccommunitty.ru',
    'stearnccommunity.ru',
    'stearnccomunitty.ru',
    'stearnccomunity.ru',
    'stearncommunitty.ru',
    'stearncommunity.ru',
    'stearncomunitty.ru',
    'stearncomunity.ru',
    'stearncornmnuity.ru',
    'stemccommunitty.ru',
    'stemccommunity.ru',
    'stemccomunitty.ru',
    'stemccomunity.ru',
    'stemcommunitty.ru',
    'stemcommunity.ru',
    'stemcomunitty.ru',
    'stemcomunity.ru',
    'stermccommunitty.ru',
    'stermccommunity.ru',
    'stermccomunitty.ru',
    'stermccomunity.ru',
    'stermcommunitty.ru',
    'stermcommunity.ru',
    'stermcomunitty.ru',
    'stermcomunity.ru',
    'sternccommunitty.r',
    'sternccommunity.ru',
    'sternccomunitty.ru',
    'sternccomunity.ru',
    'sterncommunitty.ru',
    'sterncommunity.ru',
    'sterncomunitty.ru',
    'sterncomunity.ru',
    'steancomunnity.ru'
];

whitelistDomainsSteam = [
    'steamcommunity.com',
    'store.steampowered.com',
    'steampowered.com'
];

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
    blacklistWordsDiscord.forEach(function(blackListWord){
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
    blacklistDomainsDiscord.forEach(function(blackListDomain){
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
    blacklistDomainsSteam.forEach(function(blackListDomain){
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
    blacklistDomainsRegex.foreach(function(blregex){
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
    if(DomainsInText.length > 0){
        DomainsInText.forEach(function(domain){
            // Check if domain is in whitelist
            let IswhiteListed = false;
            whitelistDomainsDiscord.forEach(function(discordOfficialDomain){
                if(domain.toLowerCase().startsWith(discordOfficialDomain)){
                    IswhiteListed = true;
                }
            })
            whitelistDomainsSteam.forEach(function(steamOfficialDomain){
                if(domain.toLowerCase().startsWith(steamOfficialDomain)){
                    IswhiteListed = true;
                }
            })
            if(!IswhiteListed){
                // Unknown Domain!
                susThingsInURL.forEach(function(susThing){
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

Response = IsPhishing(userChat);
console.log(Response);