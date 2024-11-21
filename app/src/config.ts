import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Welcome to the Christmas Lottery!',
          description:
            "Buy tickets and have fun! 🎟️<br><br>It’s <b>simple</b>, <b>fast</b>, with <b>great chances to win!</b> 🎉",
          button: 'Next',
        },

        // list
        {
          media: {
            type: 'image',
            src: import('./assets/img/submariner.jpg'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Prizes',
          description:
            'Amazing prizes await! 🎁',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: 'Rolex Submariner 🕰️',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: '5000€ 💸',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: '1000€ 💰',
            },
          ],
          button: 'Next',
        },

        // go to paywall slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_money.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          //textAlign: 'center',
          title: 'Buy...',
          description: "You can choose to buy packages of 1, 10, or 100 tickets. 🎟️<br>When sending your transaction, <b>remember to include a message with your username or email</b> so you can be notified if you win! 🏆<br>Go back to the bot's menu and click '<b>Buy</b>' to complete your purchase! 🛍️",
          button: {
            content: 'Finish',
            to: '/',
          },
        },
      ],
    },
  ],
});
