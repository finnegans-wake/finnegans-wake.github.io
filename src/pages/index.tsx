import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroQuote}>
          "riverrun, past Eve and Adam's, from swerve of shore to bend of bay..."
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/introduction">
            Start Reading
          </Link>
          <Link
            className="button button--outline button--lg button--secondary"
            to="/docs/ecosystem/digital-archives">
            Explore Resources
          </Link>
        </div>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  description: string;
  link: string;
  emoji: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Getting Started',
    emoji: '📖',
    description: 'New to the Wake? Begin your journey with our comprehensive introduction, reading strategies, and essential resources for first-time readers.',
    link: '/docs/getting-started/introduction',
  },
  {
    title: 'Reading Guides',
    emoji: '🗺️',
    description: 'Explore the structure, themes, and language of Finnegans Wake with detailed guides on characters, motifs, and interpretive approaches.',
    link: '/docs/guides/reading-strategies',
  },
  {
    title: 'Annotations & Reference',
    emoji: '📝',
    description: 'Access the essential reference works: FWEET, McHugh\'s Annotations, concordances, and scholarly resources to illuminate the text.',
    link: '/docs/reference/annotations',
  },
  {
    title: 'Joseph Campbell',
    emoji: '🗝️',
    description: 'Explore Campbell\'s lifelong engagement with Joyce—from A Skeleton Key to his Esalen lectures—and the monomyth he borrowed from the Wake.',
    link: '/docs/guides/joseph-campbell',
  },
  {
    title: 'Audio & Video',
    emoji: '🎧',
    description: 'Listen to complete readings, watch One Little Goat\'s video project, and explore 70+ hours of musical adaptations.',
    link: '/docs/ecosystem/audio',
  },
  {
    title: 'Reading Groups',
    emoji: '👥',
    description: 'Join global communities of Wake readers. Find online and in-person reading groups from Dublin to New York to Melbourne.',
    link: '/docs/ecosystem/reading-groups',
  },
];

function Feature({title, emoji, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('feature-card', styles.feature)}>
        <div className={styles.featureEmoji}>{emoji}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link to={link} className={styles.featureLink}>Learn more →</Link>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ResourceItem = {
  name: string;
  description: string;
  url: string;
};

const ResourceList: ResourceItem[] = [
  {
    name: 'FWEET',
    description: '101,670+ annotations searchable online',
    url: 'http://fweet.org/',
  },
  {
    name: 'Finwake.com',
    description: 'Complete text with tooltips (finished Aug 2025)',
    url: 'http://finwake.com/',
  },
  {
    name: 'One Little Goat Theatre',
    description: 'Video recordings with subtitles (2024-2029)',
    url: 'https://www.onelittlegoat.org/finneganswake',
  },
  {
    name: 'Waywords and Meansigns',
    description: 'Full text set to music (70+ hours)',
    url: 'https://waywordsandmeansigns.com/',
  },
];

function QuickLinks() {
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Essential Resources</Heading>
        <div className={styles.resourceGrid}>
          {ResourceList.map((resource, idx) => (
            <a key={idx} href={resource.url} className={styles.resourceCard} target="_blank" rel="noopener noreferrer">
              <strong>{resource.name}</strong>
              <span>{resource.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className={styles.sectionTitle}>About Finnegans Wake</Heading>
            <p className={styles.aboutText}>
              Published in 1939, <em>Finnegans Wake</em> is James Joyce's final and most experimental work.
              Written over seventeen years, it presents the dream of a Dublin publican,
              Humphrey Chimpden Earwicker, in a revolutionary language that blends English
              with over sixty other languages.
            </p>
            <p className={styles.aboutText}>
              The book has inspired generations of readers, scholars, and artists. From Joseph Campbell's
              pioneering <em>A Skeleton Key</em> (1944) to modern digital humanities projects,
              the Wake continues to reveal new dimensions with each reading.
            </p>
            <div className={styles.ctaSection}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started/what-is-finnegans-wake">
                Learn More About the Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickLinks />
        <AboutSection />
      </main>
    </Layout>
  );
}
