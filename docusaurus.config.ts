import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '比特鹰社会大学',
  tagline: '实践为王，成长为本，助力高薪就业！',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://socialuni.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css', './src/css/global.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    navbar: {
      // title: 'img/logo_white.png',
      logo: {
        alt: '社会大学',
        src: 'img/result.png',
        srcDark: 'img/result_dark.png',
      },
      items: [
        {
          label: '学校首页',
          position: 'right',
          href: '/#home',
        },
        // {
        //   label: 'Web3编程课',
        //   position: 'right',
        //   href: '/docs/web3-development/intro',
        // },
        {
          label: 'Web3市场营销课',
          position: 'right',
          href: '/docs/web3-operation/learning-manual/intro',
        },
      ],
    },
    footer: undefined,
    tableOfContents: {
    },
    docs: {
      sidebar: {
        // hideable: true,
      }
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
