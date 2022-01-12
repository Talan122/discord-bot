# discord-bot
A simple open-source bot.

# Dependencies
NodeJS: https://nodejs.org/en/ (runs on current)

To install libraries, open command prompt to the root folder and run `npm ci` to install dependencies.

# Running
You will need to create a `config.json` in the root folder and `roles.json` in the `commands` folder.

`config.json` is formatted like this:
```json
{
  "token": "token",
  "GUILD_ID": [
    "any-guild"
  ],
  "CLIENT_ID": "your-bots-id"
}
```

Since GUILD_ID is formatted as an array, you can add as many guilds there as you like. GUILD_ID is necessary to push slash commands to a discord server.

`roles.json` doesn't need any editing, it will automatically do it for you.

# Running
Run `start.bat` and the bot should fire up.

If you want to start it from your IDE, run `node .` in the terminal.