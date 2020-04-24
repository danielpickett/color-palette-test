import React from 'react'
import './Swatches.scss'

export const Swatches = () => {
  const colors = ['label', 'primary', 'grey', 'success', 'warning', 'error']

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
    <div className="Swatches">
      {/* {scale.map((lightness, i) => (
        <div className="Swatches__color" key={i}>
          <div className="Swatches__column-label">{lightness}</div>
        </div>
      ))} */}
      {colors.map((color, i) => (
        <div className="Swatches__color" key={i}>
          <div className="Swatches__row-label">
            {color !== 'label' ? color : ''}
          </div>
          {scale.map((lightness, j) =>
            color === 'label' ? (
              <div className="Swatches__column-label">{lightness}</div>
            ) : (
              <div
                className={`Swatches__swatch color-${color}-${lightness}`}
                key={j}
              />
            )
          )}
        </div>
      ))}
    </div>
  )
}
