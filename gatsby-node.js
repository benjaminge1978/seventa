const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const pagesSlugs = await graphql(`
    query {
      allContentfulCaseCategory {
        nodes {
          slug
          id
        }
      }
      allContentfulCases {
        nodes {
          id
          slug
          caseCategories {
            id
          }
        }
      }
    }
  `);

  if (pagesSlugs.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  pagesSlugs.data.allContentfulCaseCategory.nodes.forEach(node => {
      createPage({
          path: node.slug,
          component: path.resolve(`./src/components/case-category/case-category.js`),
          context: {
              id: node.id
          },
      });
  });

  pagesSlugs.data.allContentfulCases.nodes.forEach(node => {
      createPage({
          path: node.slug,
          component: path.resolve(`./src/components/case-page/case-page.js`),
          context: {
              id: node.id,
              categoryID: node.caseCategories[0].id,
          },
      });
  });
};