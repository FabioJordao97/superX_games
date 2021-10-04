import React, {useContext} from 'react'
import Bar from '../components/bar'
import CartCard from '../components/cart/cartCard'
import CartResults from '../components/cart/cartResults'
import Footer from '../components/footer'
import Header from '../components/header'
import GlobalStateContext from '../globalState/globalStateContext'
import { CartFooterDiv } from '../styles/footerStyles'

const CartPage = () => {
    const {cart} = useContext(GlobalStateContext)    
    return (
        <div>
            <Header />
            <Bar />
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
            <CartFooterDiv>
            <Footer />
            </CartFooterDiv>
        </div>
    )
}

export default CartPage