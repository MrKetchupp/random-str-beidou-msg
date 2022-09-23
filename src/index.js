const messages = [
    "I'm Beidou. You've heard of my ship, The Crux and its crew? If you too love adventure, then join me. I've got your back.",
    "If you ever want to trade tactics, I'm always ready.",
    "Ah! A cold beer after a hard day's work... Nothing like it!",
    "It's hard to remain on dry land for so long. Can never seem to quite get my land legs back.",
    "When stuck on a deserted island, rain is a precious source of drinking water. There's no need for it now though.",
    "Hey, it's just a little lightning. No need to fear it on the open ocean, so there's even less need to fear it on dry land.",
    "This weather would be great for setting sail.",
    "Wind's picking up. If sand gets in your eyes, be sure not to rub them.",
    "Yo, good morning. I'm about to head off, coming with me?",
    "Let's get Xiangling to whip us up something for lunch. Believe me, a hot meal from her is far better than the salted fish we eat out at sea.",
    "Alright, I'm off for a drink. Hahaha, no one willing to sell you a proper drink, huh? Perhaps I can...",
    "Time moves quickly. Haha, go, may the wind be at your back.    "
  ];

  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }

  module.exports = {
    funnyCommit
  };