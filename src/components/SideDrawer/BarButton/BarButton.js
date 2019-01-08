import React from 'react'
import { Motion, spring, presets } from 'react-motion'

const BarButton = ({ mobileNavVisible, onClick }) => {
  const style = {
    overflow: 'visible',
    // disable touch highlighting on devices
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    display: 'flex',
    alignItems: 'center',
  }

  return (
    <button type="button" onClick={onClick} style={style} className="text-white text-3xl focus:outline-none">
      <svg viewBox="0 0 96 96" height="1em">
        <Motion
          style={{
            x: spring(mobileNavVisible ? 1 : 0, presets.wobbly),
            y: spring(mobileNavVisible ? 0 : 1, presets.wobbly),
          }}
        >
          {({ x, y }) => (
            <g
              id="navicon"
              fill="none"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line
                transform={`translate(${x * 12}, ${x * -4}) rotate(${x * 45}, 7, 26)`}
                x1="7"
                y1="20"
                x2="89"
                y2="20"
              />
              <line
                transform={`translate(${x * 12}, ${x * 4}) rotate(${x * -45}, 7, 70)`}
                x1="7"
                y1="76"
                x2="89"
                y2="76"
              />
              <line transform={`translate(${x * -96})`} opacity={y} x1="7" y1="48" x2="89" y2="48" />
            </g>
          )}
        </Motion>
      </svg>
    </button>
  )
}

export default BarButton
