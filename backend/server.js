// Import required modules
const { Telegraf } = require('telegraf');
const express = require('express');
const cors = require('cors');

const connectDb = require('./config/db');
const userRoutes = require('./Router/userRoutes');
const { PORT, BOT_TOKEN, WEB_LINK, FRONTEND_PATH_VERCEL, FRONTEND_PATH_LOCAL } = require('./config/index');

const community_link = "https://t.me/yousufbhatti_1";

const app = express();
app.use(express.json());

// Middleware
app.use(cors({
  origin: [FRONTEND_PATH_VERCEL, FRONTEND_PATH_LOCAL]
}));

// Database Connection
connectDb();

// Initialize the Telegram bot using the bot token
const bot = new Telegraf(BOT_TOKEN);

// Simple message handler for the bot
bot.on('message', async (ctx) => {

  await ctx.reply(`Hey, Welcome to Dead_Eye_Bot!`, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "👋 Start now!", web_app: { url: WEB_LINK } }],
        [{ text: "Join our Community", url: community_link }],
      ],
    },
  });
});

// Routes
app.use('/', userRoutes);

// Start express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Test API
app.get('/', (req, res) => {
  res.send('Bot is running');
});

// Start the bot
bot.launch()
  .then(() => console.log('Telegram bot is running'))
  .catch((err) => console.error('Failed to launch bot:', err));
