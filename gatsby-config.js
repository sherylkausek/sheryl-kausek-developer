/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Sheryl Kausek | Developer`,
    siteUrl: `https://sheryl.kausek.com`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: "gatsby-plugin-mdx",
    options: {
      extensions: [".mdx", ".md"],
      remarkPlugins: [
        require("remark-slug"),
        require("remark-autolink-headings")
      ],
      rehypePlugins: [
        require("rehype-prism-plus")
      ]
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-layout", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },],
};