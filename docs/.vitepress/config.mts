import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KKore",
  description: "Documentation page for the KKore project",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' },
      // { text: 'Documenting components', link: '/documenting_components' },
    ],

    sidebar: 
      [ 
        {
          text: 'Components',
          items: [
            { text: 'KButton', link: '/components/KButton' },
            { text: 'KButtonGroup', link: '/components/KButtonGroup' },
            { text: 'KSwitch', link: '/components/KSwitch' },
            { text: 'KInput', link: '/components/KInput' },
            { text: 'KDropdown', link: '/components/KDropdown' },
            { text: 'KChip', link: '/components/KChip' },
            // { text: 'Markdown Examples', link: '/markdown-examples' },
            // { text: 'Runtime API Examples', link: '/api-examples' },
          ],
        }
      ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kristian-Knudsen/KKore' }
    ]
  }
})
