/** @jsx jsx */
/* global tw */
import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'
import LazyLoad from 'react-lazyload'
import { jsx, css } from '@emotion/core'

import styled from '@emotion/styled'
import sbimage from '../../utils/sbimage'

import styles from '../../styles/styles.js'

const Heading = styled('h1')`
  ${tw`my-0 text-xl leading-tight text-pink`};
`
const Testlink = styled(Link)`
  ${tw`bg-white border-purple border font-semibold hover:bg-purple hover:text-white leading-normal px-4 py-1 rounded-full text-purple text-xs`};
`

const Teaser = ({ blok }) => (
  <SbEditable content={blok}>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">{blok.headline}</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        <div css={styles.hotpink}>Some hotpink text.</div>
        <Heading>test</Heading>
        <button css={styles.button} type="button">
          Test Button
        </button>
        <p className="lead">
          <Testlink css="{styles.button}" to="about/">
            Blog Posts
          </Testlink>
        </p>
      </div>
      <LazyLoad height={500}>
        <img src={sbimage(blok.image, '1260x500')} alt="test" />
      </LazyLoad>
    </div>
  </SbEditable>
)

export default Teaser
