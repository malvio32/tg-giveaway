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
          title: 'Benvenuto alla lotteria natalizia!',
          description:
            "Compra i tickets e non rompe il cazzo!<br><br>E' <b>semplice</b>, <b>veloce</b>, con <b>grandi possibilità di vincita!</b>",
          button: 'Next',
        },

        // image
        {
          media: {
            type: 'image',
            src: import('./assets/img/submariner.jpg'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Vuoi diventare come lui?',
          description:
            "Se la risposta è <b>si</b> continuiamo...",
          button: 'Next',
        },

        // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Forms',
          description: 'Compila il form sottostante',
          form: [
            {
              id: 'text_from_form',
              placeholder: 'E-mail input',
              type: 'text',
            },
          ],
          button: 'Next',
        },

        // list
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Premi',
          description:
            'Si potranno vincere fantastici premi!',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: 'Rolex Submariner',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: '5000$',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: '1000$',
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
          textAlign: 'center',
          title: 'Compra...',
          description: "Torna nel menu del bot è clicca acquista!",
          button: {
            content: 'Fine',
            to: '/',
          },
        },
      ],
    },
  ],
});
