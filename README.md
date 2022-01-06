
# Discord Anti Scam / Phishing

Heya, i'm sure you guys will receive Messages in Channels/Direct about Free Nitro, Nitro Airdrop etc... and they wont stop lol. \
Soo, i just wrote this discord bot using Discord.JS v13 to detect them, and punish them. \
default Punishment is timeout, if you want to customize it check discord.js docs.



## Showcase

![screenshot1](https://cdn.discordapp.com/attachments/876796835388358706/928495119362064434/screenshot_1115_2022-01-06_07.png)


## Thanks To

- https://github.com/TechnicallyCoded/Discord-AntiPhishingBot-Public


## Contributing

Contributions are always welcome! \
Feel free to PR for adding new blacklisted domains / words or even code changes :)


## Installation

1- Install nodeJS and Discord.JS => https://discordjs.guide/preparations/ \
2- Edit `config/config.json`
```json
{
    "clientId": "",      --> Add your Client ID Here
	"guildId": "",       --> Add your Server(Guild) ID Here
    "token": "",         --> Add your Bot Token Here

    "BotSetting": {
        "logChannel": "" --> Add Channel ID to Log Stuff!
    }
}
```
    
## FAQ

#### Does this Support Multi Servers?

Nope, feel free to fork/PR.


#### How can i Help as a non-programmer?

Add / Suggest us more domains / words to blacklist :).

