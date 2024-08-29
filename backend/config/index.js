const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
const BOT_TOKEN = process.env.BOT_TOKEN;
const WEB_LINK = process.env.WEB_LINK;
const MONGODB_URI = process.env.MONGODB_URI;
const FRONTEND_PATH_LOCAL = process.env.FRONTEND_PATH_LOCAL;
const FRONTEND_PATH_VERCEL = process.env.FRONTEND_PATH_VERCEL;

module.exports = {
    PORT,
    BOT_TOKEN,
    WEB_LINK,
    MONGODB_URI,
    FRONTEND_PATH_LOCAL,
    FRONTEND_PATH_VERCEL
}