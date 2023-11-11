import React from 'react'
import "./Popular.css"
import data_product from "./database/data"
import Item from '../Item/Item'
import cart from "../assets/cart.png"

const Popular = () => {
  return (
    <div className='popular'>
      <h1>prueba de popular</h1>
      <img src={cart} alt="" />
      <hr />
      <div className="popular-item">
        {data_product.map((item,i)=>{
          return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
      
    </div>
  )
}

export default Popular