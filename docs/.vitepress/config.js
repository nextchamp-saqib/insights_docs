import { defineConfig } from 'vitepress';
import sidebar from './sidebar';

const tagline = 'Free, Open Source, and Community-Driven Data Analysis and Visualization Tool.';

export default defineConfig({
  lang: 'en-US',
  title: 'Frappe Insights',
  description: tagline,
  titleTemplate: tagline,
  appearance: true,
  lastUpdated: true,
	outDir: "../insights_docs/public/docs",
	base: "/assets/insights_docs/docs/",

  head: [['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: false,
    nav: nav(),
    sidebar: sidebar(),
    editLink: {
      pattern: 'https://github.com/frappe/insights_docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/frappe/insights' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Frappe Technologies Pvt. Ltd.',
    },
  },
});

function nav() {
  return [
    {
      text: 'Home',
      link: 'https://frappeinsights.com/',
    },
    {
      text: 'Community',
      link: 'https://t.me/frappeinsights',
    },
  ];
}