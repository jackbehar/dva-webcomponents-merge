module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.js',
          'src/components/Accordion/Accordion.js',
          'src/components/AccordionItem/AccordionItem.js',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: './uxpin.webpack.config.js',
  },
  name: 'DVA Web Components'
};
