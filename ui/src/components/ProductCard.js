import React from 'react'

export const ProductCard = (props) => {

  return (

    <div className='productCard'>
        <img src = {props.img}alt=' the product'></img>
        <div className='product_info'>
          <p>{props.type}</p>
          <h3>{props.name}</h3>
          <h1>{props.price}$</h1>
        </div>
    </div>
  )

}
