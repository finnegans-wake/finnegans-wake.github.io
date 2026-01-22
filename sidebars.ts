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
        'guides/joseph-campbell',
        'guides/vico',
        'guides/bruno',
        'guides/themes',
        'guides/structure',
        'guides/language',
        'guides/characters',
      ],
    },
    {
      type: 'category',
      label: 'Chapter-by-Chapter',
      collapsed: true,
      items: [
        'chapters/index',
        {
          type: 'category',
          label: 'Book I: The Parents',
          collapsed: true,
          items: [
            'chapters/book-1-chapter-1',
            'chapters/book-1-chapter-2',
            'chapters/book-1-chapter-3',
            'chapters/book-1-chapter-4',
            'chapters/book-1-chapter-5',
            'chapters/book-1-chapter-6',
            'chapters/book-1-chapter-7',
            'chapters/book-1-chapter-8',
          ],
        },
        {
          type: 'category',
          label: 'Book II: The Children',
          collapsed: true,
          items: [
            'chapters/book-2-chapter-1',
            'chapters/book-2-chapter-2',
            'chapters/book-2-chapter-3',
            'chapters/book-2-chapter-4',
          ],
        },
        {
          type: 'category',
          label: 'Book III: Shaun',
          collapsed: true,
          items: [
            'chapters/book-3-chapter-1',
            'chapters/book-3-chapter-2',
            'chapters/book-3-chapter-3',
            'chapters/book-3-chapter-4',
          ],
        },
        'chapters/book-4',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/timeline',
        'reference/thunderwords',
        {
          type: 'category',
          label: 'Characters',
          collapsed: true,
          items: [
            'reference/characters/index',
            'reference/characters/hce',
            'reference/characters/alp',
            'reference/characters/shem',
            'reference/characters/shaun',
            'reference/characters/issy',
          ],
        },
        {
          type: 'category',
          label: 'Motifs',
          collapsed: true,
          items: [
            'reference/motifs/index',
            'reference/motifs/fall',
            'reference/motifs/letter',
            'reference/motifs/river',
            'reference/motifs/cycle',
            'reference/motifs/crime',
          ],
        },
        {
          type: 'category',
          label: 'Vocabulary',
          collapsed: true,
          items: [
            'reference/vocabulary/index',
            'reference/vocabulary/portmanteaus',
            'reference/vocabulary/neologisms',
            'reference/vocabulary/common-words',
          ],
        },
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
