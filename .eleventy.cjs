module.exports = function (eleventyConfig) {
  dir: {
    input: "src",
    output; "docs"
  }
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true,
  });
  eleventyConfig.addPassthroughCopy("./src/_data");
};
