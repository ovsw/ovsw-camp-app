import React from 'react'
import Components from '../components.js'
import Image from '../image'

const Page = props => {
  const { blok } = props

  // console.log(blok)

  return (
    <div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        {blok.body &&
          blok.body.map(block => React.createElement(Components[block.component], { key: block._uid, blok: block }))}
      </div>
    </div>
  )
}

export default Page
