import React from 'react'

const CartCard = (props) => {
    return (
        <div>
             <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.score}</p>
            <p>{props.quantity}</p>
            <p>{props.shipping}</p>
            <img src={props.image} alt={props.name}/>
        </div>
    )
}

export default CartCard