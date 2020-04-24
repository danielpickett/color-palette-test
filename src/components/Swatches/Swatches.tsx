import React, { useState, ChangeEvent } from 'react'
import './Swatches.scss'

export const Swatches = () => {
  const [isGreyScale, setIsGreyScale] = useState(false)
  const handleSetIsGreyScale = (event: ChangeEvent<HTMLInputElement>) => {
    setIsGreyScale(event.currentTarget.checked)
  }

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
    <div className="Swatches" style={{filter: isGreyScale ? 'grayscale(100)' : undefined}}>
      {colors.map((color, i) => (
        <div className="Swatches__color" key={i}>
          <div className="Swatches__row-label">
            {color !== 'label' ? color : ''}
          </div>
          {scale.map((lightness, j) =>
            color === 'label' ? (
              <div className="Swatches__column-label" key={j}>{lightness}</div>
            ) : (
              <div
                className={`Swatches__swatch color-${color}-${lightness}`}
                key={j}
              />
            )
          )}
        </div>
      ))}
      <div className="Swatches__checkbox">
        <label>
          <input type="checkbox" checked={isGreyScale} onChange={handleSetIsGreyScale}/> 
          greyscale
        </label>
      </div>
    </div>
  )
}
