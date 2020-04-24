import React from 'react'
import './Swatches.scss'

export const Swatches = () => {
  const colors = ['primary', 'grey', 'success', 'warning', 'error']

  const scale = [
    '050',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]
  return (
    <div className="ColorSwatches">
      {colors.map((color, i) => (
        <div className="ColorSwatches__color" key={i}>
          {scale.map((lightness, j) => (
              <div
                className={`ColorSwatches__swatch color-${color}-${lightness}`}
                key={j}
              />
          ))}
        </div>
      ))}
    </div>
  )
}
