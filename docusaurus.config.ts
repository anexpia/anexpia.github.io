import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'anexpia',
  url: 'https://anexpia.github.io', 
  baseUrl: '',           
  organizationName: 'anexpia',             
  deploymentBranch: 'gh-pages',

  tagline: 'stuff be here!',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, 
  },

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {

    docs: {
      sidebar: {
        hideable: true,
      },
   },

    colorMode: {
      defaultMode: 'dark',           
      disableSwitch: true,          
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'anexpia',

      items: [
          {
          to: '/',
          position: 'right',
          label: 'About',
        },
        {
          to: '/portfolio',
          position: 'right',
          label: 'Portfolio',
        },
        {
          to: '/commissions',
          position: 'right',
          label: 'Commissions',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              html: `
                <a href="https://github.com/anexpia" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                  <i class="fa-brands fa-github"></i> GitHub
                </a>
              `,
            },
            {
              html: `
                <a href="https://www.roblox.com/users/122121163/profile" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                  <img 
                    src="/img/roblox_flat_icon.png" 
                    alt="Roblox" 
                    style="width: 16px; height: 16px;" 
                  />
                  Roblox Profile
                </a>
              `,
            },
            {
              html: `
                <div class="footer__link-item" style="cursor: default;">
                  <i class="fa-brands fa-discord"></i> Discord: @anexpia
                </div>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anexpia. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;