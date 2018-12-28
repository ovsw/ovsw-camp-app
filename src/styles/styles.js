/* global tw */
import { jsx, css } from '@emotion/core'

const styles = {
  hotpink: css`
    color: blue;
  `,
  button: css(
    tw`bg-white border-purple border font-semibold hover:bg-purple hover:text-white leading-normal px-4 py-1 rounded-full text-purple text-xs`
  ),
}

export default styles
