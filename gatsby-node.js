/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


// code for the dynamic generation of pages.
// The call to createPage will create a page for each content item we
// have created in Storyblok when executing gatsby build

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/storyblok-entry.js')

    resolve(
      graphql(
        `{
          allStoryblokEntry {
            edges {
              node {
                id
                name
                created_at
                uuid
                slug
                full_slug
                content
                is_startpage
                parent_id
                group_id
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const entries = result.data.allStoryblokEntry.edges
        entries.forEach((entry, index) => {
          let pagePath = entry.node.full_slug == 'home' ? '' : `${entry.node.full_slug}/`

          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              story: entry.node
            }
          })
        })
      })
    )
  })
}