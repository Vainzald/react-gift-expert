import React from 'react'

export const GifItem = ({title, url}) => {
    const mandarHola = () => {
        console.log(key);
    }
  return (
    <div className='card'  onClick={mandarHola}>
        <img src={url} alt={title} />
        <p> {title} </p>
    </div>
  )
}
