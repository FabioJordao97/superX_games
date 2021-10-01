import React, {useContext} from 'react'
import CartCard from '../components/cartCard'
import GlobalStateContext from '../globalState/globalStateContext'

const CartPage = () => {
    const {cart} = useContext(GlobalStateContext)
    return (
        <div>
             {cart.map((product)=>{
                return (
                    <CartCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    score={product.score}
                    image={product.image}
                    quantity={product.quantity}
                    shipping={product.shipping}
                    />
                )
            })}
        </div>
    )
}

export default CartPage