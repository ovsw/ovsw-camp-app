import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `keywords`,
                content: keywords,
              },
            ].concat(meta)}
          >
            <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />
            <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async="" />
            <script>
              {`
                var OneSignal = window.OneSignal || [];
                OneSignal.push(["init", {
                  appId: "3decac5b-b77d-4da0-8685-b2fe25f8ef17",
                  autoRegister: false, /* Set to true to automatically prompt visitors */
                  httpPermissionRequest: {
                    enable: true
                  },
                  notifyButton: {
                      enable: true /* Set to false to hide */
                  },
                  welcomeNotification: {
                    "title": "My Custom Title",
                    "message": "Thanks for subscribing!",
                    // "url": "" /* Leave commented for the notification to not open a window on Chrome and Firefox (on Safari, it opens to your webpage) */
                  },
                  promptOptions: {
                      /* actionMessage limited to 90 characters */
                      actionMessage: "We'd like to show you notifications for the latest news and updates.",
                      /* acceptButtonText limited to 15 characters */
                      acceptButtonText: "ALLOW",
                      /* cancelButtonText limited to 15 characters */
                      cancelButtonText: "NO THANKS"
                  },
                  subdomainName: "your_label" /* The label for your site that you added in Site Setup mylabel.os.tc */
                }]);
              `}
            </script>
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: '',
  title: 'Missing Page Title',
  description: 'Missing Page Description',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.string,
  title: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
