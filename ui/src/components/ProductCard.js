import React from 'react'

export const ProductCard = (props) => {

  return (

    <div className='productCard'>
        <img alt='image of the product'></img>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <p>{props.type}</p>
    </div>
  )

}
