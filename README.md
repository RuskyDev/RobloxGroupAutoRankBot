## 🤖 RobloxGroupAutoRankBot
RobloxGroupAutoRankBot is a bot designed for a British Army |CBA| on Roblox. It helps automate rank management within the group. Please note that there is an ongoing issue with cookies, and efforts are being made to resolve it.

# Installation
To use the bot, you need to have Node.js installed on your system. If you don't have Node.js installed, you can download it from [here](https://nodejs.org/en/download).

Once you have Node.js installed, follow these steps:

1. Open your terminal or command prompt.
2. Run the following command to initialize a new Node.js project:

```
npm init -y
```
3. Install the required dependencies by running the following command:
```
npm install
```
Create a config.json file in the root directory of the project and populate it with the following information:
```json
{
    "groupId": "Enter-GroupID-Here",
    "cookie": "Enter-Roblox-Bot-Account-Cookie-Here"
}
```

Make sure to replace "Enter-GroupID-Here" with the actual Group ID and "Enter-Roblox-Bot-Account-Cookie-Here" with the appropriate Roblox bot account cookie.

# Usage
To start the bot, run the following command:
```
npm start
```

Please note that the bot will now begin performing the specified tasks based on the configuration and the provided cookie.