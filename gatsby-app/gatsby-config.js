require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_STRAPI_API_URL || "http://localhost:1337",
        collectionTypes: ["course", "blog", "gallery", "module", "section"],
        queryLimit: 1000,
      },
    },
  ],
};
