import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ETHGas Documentation',
  tagline: 'Complete API documentation for ETHGas platform - Ethereum gas trading and MEV opportunities',
  favicon: 'img/EG.svg',

  future: {
    v4: true,
  },

  url: 'https://docs.ethgas.com',
  baseUrl: '/',

  organizationName: 'ethgas',
  projectName: 'ethgas-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
      type: 'text/css',
    },
    {
      src: '/js/sidebar-tabs.js',
      type: 'text/javascript',
    },
    {
      src: '/js/navbar-section.js',
      type: 'text/javascript',
      defer: true,
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: undefined,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ETHGas Docs',
      items: [
        {
          to: '/docs/getting-started/welcome',
          label: 'Overview',
          position: 'left',
        },
        {
          to: '/docs/developers/overview',
          label: 'Traders',
          position: 'left',
        },
        {
          to: '/docs/api/builder/registration',
          label: 'Builders',
          position: 'left',
        },
        {
          to: '/docs/validators/registration',
          label: 'Validators',
          position: 'left',
          activeBaseRegex: '^/docs/validators/',
        },
        {
          type: 'html',
          value: '<span class="navbar-section-label" aria-live="polite"></span>',
          position: 'left',
          className: 'navbar-section-item',
        },
        {
          type: 'search',
          position: 'right',
          className: 'navbar-search-item',
        },
      ],
      hideOnScroll: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    mobileNavbar: {
      show: true,
    },
    mobileSidebarCollapsible: true,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Overview',
              to: '/docs/getting-started/welcome',
            },
            {
              label: 'API Reference',
              to: '/docs/api/overview',
            },
            {
              label: 'WebSocket API',
              to: '/docs/websocket/overview',
            },
            {
              label: 'Error Codes',
              to: '/docs/reference/error-codes',
            },
          ],
        },
        {
          title: 'Platform',
          items: [
            {
              label: 'ETHGas Homepage',
              href: 'https://ethgas.com',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ethgas-developer',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/ethgas',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ethgas',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ETHGas. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
