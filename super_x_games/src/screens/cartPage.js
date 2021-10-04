import React, {useContext} from 'react'
import CartCard from '../components/cart/cartCard'
import CartResults from '../components/cart/cartResults'
import Header from '../components/header'
import GlobalStateContext from '../globalState/globalStateContext'

const CartPage = () => {
    const {cart} = useContext(GlobalStateContext)    
    return (
        <div>
            <Header />
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
            <CartResults />
        </div>
    )
}

export default CartPage