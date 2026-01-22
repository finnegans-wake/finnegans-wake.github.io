import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Finnegans Wake',
  tagline: 'The comprehensive resource for readers, scholars, and enthusiasts of Joyce\'s final masterwork',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://finnegans-wake.github.io',
  baseUrl: '/',

  organizationName: 'finnegans-wake',
  projectName: 'finnegans-wake.github.io',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/finnegans-wake/finnegans-wake.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    metadata: [
      {name: 'keywords', content: 'Finnegans Wake, James Joyce, Joyce studies, literary criticism, modernism, Wake annotations'},
      {name: 'description', content: 'The comprehensive resource for Finnegans Wake readers, scholars, and enthusiasts'},
      {property: 'og:type', content: 'website'},
    ],

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    announcementBar: {
      id: 'contribute',
      content: 'Help improve these docs! <a href="https://github.com/finnegans-wake/finnegans-wake.github.io">Contribute on GitHub</a>',
      backgroundColor: '#1e3a5f',
      textColor: '#fff',
      isCloseable: true,
    },

    navbar: {
      title: 'Finnegans Wake',
      logo: {
        alt: 'Finnegans Wake Logo',
        src: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          to: '/docs/getting-started/introduction',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: '/docs/guides/reading-strategies',
          label: 'Guides',
          position: 'left',
        },
        {
          to: '/docs/reference/annotations',
          label: 'Reference',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Ecosystem',
          position: 'left',
          items: [
            {label: 'Digital Archives', to: '/docs/ecosystem/digital-archives'},
            {label: 'Audio Resources', to: '/docs/ecosystem/audio'},
            {label: 'Reading Groups', to: '/docs/ecosystem/reading-groups'},
            {type: 'html', value: '<hr style="margin: 0.5rem 0;">'},
            {label: 'Tools & Software', to: '/docs/ecosystem/tools'},
          ],
        },
        {
          href: 'https://github.com/finnegans-wake',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Getting Started', to: '/docs/getting-started/introduction'},
            {label: 'Reading Strategies', to: '/docs/guides/reading-strategies'},
            {label: 'Key Themes', to: '/docs/guides/themes'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'FWEET', href: 'http://fweet.org/'},
            {label: 'James Joyce Digital Archive', href: 'https://jjda.ie/'},
            {label: 'Waywords and Meansigns', href: 'https://waywordsandmeansigns.com/'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Reading Groups', to: '/docs/ecosystem/reading-groups'},
            {label: 'James Joyce Society', href: 'https://joycesociety.com/'},
            {label: 'GitHub', href: 'https://github.com/finnegans-wake'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Finnegans Wake Community. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
