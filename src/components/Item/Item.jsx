import React from 'react'
import "./Item.css"

const Item = () => {
  return (
    <div className='item'>
        <img src={props.imge} alt="" />
        <p>{props.name}</p>
        <div className='item-princes'>
            <div className='item-prince-new'>
                {props.new-price}
            </div>
            <div className='item-price-old'>
                {props.old-price}

            </div>
        </div>
    </div>
  )
}

export default Item