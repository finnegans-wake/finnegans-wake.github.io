import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/what-is-finnegans-wake',
        'getting-started/first-steps',
        'getting-started/essential-resources',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'guides/reading-strategies',
        'guides/themes',
        'guides/structure',
        'guides/language',
        'guides/characters',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/annotations',
        'reference/concordances',
        'reference/bibliography',
        'reference/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Ecosystem',
      collapsed: true,
      items: [
        'ecosystem/digital-archives',
        'ecosystem/audio',
        'ecosystem/reading-groups',
        'ecosystem/tools',
        'ecosystem/scholarship',
      ],
    },
  ],
};

export default sidebars;
