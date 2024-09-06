const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');  // This is to send images

// Replace with your Telegram bot token from BotFather
const token = '6635031110:AAGkR6o5eBIJdw2k2sC2YB4Sa3y4zYFv1nE';

// Create a new Telegram bot instance
const bot = new TelegramBot(token, { polling: true });

// On /start command, send a message with two inline buttons
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, 'https://mech247logs.com.ng/bot_image/dog.jpeg', {
    caption: 'Welcome to Dog Drops! Choose an option:',
    reply_markup: {
      inline_keyboard: [
        [{ text: 'CLAIM', url: 'https://t.me/dogsdrops_en_bot/dogsdrops_en' }],
        [{ text: 'MORE', callback_data: 'more_info' }]
      ]
    }
  });
});

// Handle the /more command manually (triggered from the inline button)
bot.on('callback_query', (callbackQuery) => {
  const message = callbackQuery.message;
  const data = callbackQuery.data;

  if (data === 'more_info') {
    // Send a message with information about the Dog bot and attach an image
    bot.sendPhoto(message.chat.id, 'https://mech247logs.com.ng/bot_image/dog.jpeg', {
      caption: 'Dog bot helps you track airdrops and other rewards! Keep an eye out for more info.'
    });
  }
});

// Listen for the /more command typed by the user
bot.onText(/\/more/, (msg) => {
  const chatId = msg.chat.id;

  // Send a message with information about the Dog bot and attach an image
  bot.sendPhoto(chatId, 'https://mech247logs.com.ng/bot_image/dog.jpeg', {
    caption: 'Dog bot helps you track airdrops and other rewards! Keep an eye out for more info.'
  });
});
