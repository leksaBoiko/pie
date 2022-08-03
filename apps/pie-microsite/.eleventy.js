const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const {
  filters,
  shortcodes,
  templateHandlers
} = require('./src/_11ty');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // Custom Filter registrations
  eleventyConfig.addFilter("pieIconsSvg", filters.pieIconsSvg);

  // Custom File Extension handling
  templateHandlers.scss(eleventyConfig);

  // Custom shortcodes
  eleventyConfig.addShortcode("storybook", shortcodes.storybook)
  eleventyConfig.addShortcode("codesandbox", shortcodes.codesandbox)

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk"
  };
};
