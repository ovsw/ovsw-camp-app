/* global tw */
import { css } from '@emotion/core'

const styles = {
  navbar: css(tw`
    bg-green-darker
    fixed
    pin-x pin-t
    w-full
  `),
  logowrapper: css(tw`
  
  `),
  logo: css(tw`
    no-underline
    text-3xl
    text-white
  `),
  navigation: css(tw`
    h-full  
    items-center
    flex
    flex-auto
    px-10
  `),
  navigationItems: css`
    color: blue;
  `,
  button: css(
    tw`bg-white border-purple border font-semibold hover:bg-purple hover:text-white leading-normal px-4 py-1 rounded-full text-purple text-xs`
  ),
}

export default styles
