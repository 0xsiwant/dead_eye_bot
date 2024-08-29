// Import required modules
const { Telegraf } = require('telegraf');
const express = require('express');
const cors = require('cors');

const connectDb = require('./config/db');

const userRoutes = require('./Router/userRoutes');
const UserModel = require('./models/userModel');

const { PORT, BOT_TOKEN, WEB_LINK, FRONTEND_PATH_VERCEL, FRONTEND_PATH_LOCAL } = require('./config/index');


const app = express();
app.use(express.json());


// Middleware
app.use(cors({
  origin: [FRONTEND_PATH_VERCEL, FRONTEND_PATH_LOCAL] 
}));



// Database Connection
connectDb();


// Initialize the Telegram bot using the bot token
console.log("BOT Token", BOT_TOKEN);
const bot = new Telegraf(BOT_TOKEN);


// Simple message handler for the bot
bot.on('message', async (ctx) => {
  const userMessage = ctx.message.text;
  await ctx.reply(`You said: ${userMessage}\nVisit our site: ${process.env.WEB_LINK}`);
});


// Routes
app.use('/', userRoutes);

// Start express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// test api
app.get('/', (req, res) => {
  res.send('Bot is running');
});



// Start the bot
bot.launch()
  .then(() => console.log('Telegram bot is running'))
  .catch((err) => console.error('Failed to launch bot:', err));