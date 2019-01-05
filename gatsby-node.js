/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// code for the dynamic generation of pages.
// The call to createPage will create a page for each content item we
// have created in Storyblok when executing gatsby build

const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/storyblok-entry.js')

    // load a configurable site navigation from a global "settings" content item in Storyblok
    graphql(
      `
        {
          allStoryblokEntry(filter: { slug: { eq: "settings" } }) {
            edges {
              node {
                id
                name
                created_at
                published_at
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
        }
      `
    ).then(result => {
      // process the result of the settings query
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      // store the result of the settings query to add to the context later
      const globalSettings = result.data.allStoryblokEntry.edges[0].node

      // then do another query, this time for all the pages.
      // problem: the content node property below is just a big string blob that needs to be processed into JSON
      // to create the blok prop that we use to load the pages's page component and pass it its props.
      // currently that's done in the "storyblok-entry.js" template.

      resolve(
        graphql(
          `
            {
              allStoryblokEntry(filter: { slug: { ne: "settings" } }) {
                edges {
                  node {
                    id
                    name
                    created_at
                    published_at
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
            }
          `
        ).then(allSbStoriesResponse => {
          if (allSbStoriesResponse.errors) {
            console.log(allSbStoriesResponse.errors)
            reject(allSbStoriesResponse.errors)
          }

          // process the responseponse with all the pages from storyblok
          const sbEntries = allSbStoriesResponse.data.allStoryblokEntry.edges

          // go throuch all the edges of the query response
          sbEntries.forEach(entry => {
            const pagePath = entry.node.full_slug === 'home' ? '' : `${entry.node.full_slug}/`

            const story = Object.assign({}, entry.node)
            story.content = JSON.parse(story.content)

            createPage({
              path: `/${pagePath}`,
              component: storyblokEntry,
              context: {
                globalSettings,
                story,
              },
            })
          })
        })
      )
    })
  })
}

// exports.onCreateNode = ({ node }) => {
//   if (node.internal.type === `StoryblokEntry`) {
//     // console.log(node.internal.type)
//   }
// }
