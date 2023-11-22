export default defineAppConfig({
  docux: {
    title: 'NYXBCommands',
    description: 'NYXBCommands is a Discord.JS command handler developed by Nyxb. It\'s designed to simplify your bot development, allowing you to focus on creating unique commands and functionalities without worrying about the underlying command handling architecture.',
    image: 'https://raw.githubusercontent.com/nyxb/nyxbcommands.docs/main/public/NyxbShot-2023-11-22-at-02.50.06%402x.png',
    socials: {
      twitter: 'nyxb0',
      github: 'nyxb/nyxbcommands.docs',
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'nyxbcommands.docs',
      owner: 'nyxb',
      edit: true,
    },
    aside: {
      level: 1,
      collapsed: false,
      exclude: [],
      navigation: true,
    },
    main: {
      padded: true,
    },
    header: {
      title: '',
      logo: true,
      showLinkIcon: true,
      exclude: [],
      navigation: false,
    },
    footer: {
      iconLinks: [
      ],
    },
  },
})
