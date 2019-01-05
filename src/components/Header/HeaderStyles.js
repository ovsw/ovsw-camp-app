/* global tw */
import { css } from '@emotion/core'

const styles = {
  header: css`
    color: blue;
  `,
  button: css(
    tw`bg-white border-purple border font-semibold hover:bg-purple hover:text-white leading-normal px-4 py-1 rounded-full text-purple text-xs`
  ),
}

export default styles
