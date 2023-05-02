module.exports = {
  components: {
    categories: [
      {
        name: "General",
        include: [
          "src/components/Accordion/Accordion.js",
          "src/components/AccordionItem/AccordionItem.js",
          "src/components/Button/Button.js",
          "src/components/Checkbox/Checkbox.js",
          "src/components/CheckboxGroup/CheckboxGroup.js",
          "src/components/MemorableDate/MemorableDate.js",
          "src/components/Select/Select.js",
          "src/components/TextInput/TextInput.js",
        ],
      },
    ],
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.js",
    webpackConfig: "./uxpin.webpack.config.js",
  },
  name: "DVA Web Components",
};
