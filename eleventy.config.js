export default async function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setQuietMode(true);

  eleventyConfig.addPassthroughCopy({ "src/static/": "/" });

  return {
    templateFormats: ["md", "njk"],

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      output: "_site",
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
  };
}
