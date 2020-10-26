var path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
  {
    allContentfulProduct {
      nodes {
        slug
        title
        desc {
          json
        }
      }
    }
  }
  `)
  console.log(JSON.stringify(result))

  result.data.allContentfulProduct.nodes.forEach((obj)=> {
    createPage({
      //It must have following 3 things
      path: `/product/${obj.slug}`,
      component: path.resolve('./src/templates/product.tsx'),
      context: {
        itemDetails: obj
      }
    })
  })
}