import React from 'react'

export const ProductCard = (props) => {

  return (

    <div className='productCard'>
        <img src = {props.img}alt='image of the product'></img>
        <div className='product_info'>
          <p>¦{props.type}¦</p>
          <h3>{props.name}</h3>
          <p>{props.price}$</p>
        </div>
    </div>
  )

}
