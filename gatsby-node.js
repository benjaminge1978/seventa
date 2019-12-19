const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const pagesSlugs = await graphql(`
        query CreatePagesQuery {
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
            allContentfulPost {
                nodes {
                    id
                    slug
                }
            }
        }
    `);

    if (pagesSlugs.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }

    const { createPage } = actions;
    const postsPerPage = 6;
    const pagesCount = Math.ceil(pagesSlugs.data.allContentfulPost.nodes.length / postsPerPage);

    for ( let i = 0; i < pagesCount; i++ ) {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve(`./src/components/blog/blog.js`),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                pagesCount,
                currPage: i + 1,
            },
        });
    }

    pagesSlugs.data.allContentfulPost.nodes.forEach(node => {
        createPage({
            path: `/blog/${node.slug}`,
            component: path.resolve(`./src/components/blog-post/blog-post.js`),
            context: {
                id: node.id
            },
        });
    });

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