module.exports = {
    tmi: {
        client: {
            identity: {
                username: process.env.BOT_USERNAME,
                password: process.env.OAUTH_TOKEN
            },
            channels: [
                process.env.CHANNEL_NAME
            ]
        }
    },
    websocket: {
        port: process.env.PORT
    }
};
