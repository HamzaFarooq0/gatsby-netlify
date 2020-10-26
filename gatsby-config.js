module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5cyx177ckgkk`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: '7INjKuMa-c6LwuNb0imhX3UCTDz-NrCW5nvF8-SShUI',
      },
    },
  ],
}
