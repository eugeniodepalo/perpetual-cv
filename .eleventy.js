const postcss = require("postcss")
const postcssrc = require("postcss-load-config")

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats("css,njk")
  eleventyConfig.addPassthroughCopy({ assets: "/" })

  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    useLayouts: false,
    compile: async (inputContent, inputPath) => {
      return async ({ page: { outputPath } }) => {
        const { options, plugins } = await postcssrc()

        const { css } = await postcss(plugins).process(inputContent, {
          ...options,
          from: inputPath,
          to: outputPath,
        })

        return css
      }
    },
  })

  return {
    dir: {
      input: "_src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  }
}
