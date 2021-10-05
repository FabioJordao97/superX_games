import React, {useContext} from 'react'
import Bar from '../components/bar'
import CartCard from '../components/cart/cartCard'
import CartResults from '../components/cart/cartResults'
import Footer from '../components/footer'
import Header from '../components/header'
import GlobalStateContext from '../globalState/globalStateContext'
import { EmptyCart, CartContainer, CartH2 } from '../styles/cartStyles'
import { CartFooterDiv } from '../styles/footerStyles'

const CartPage = () => {
    const {cart} = useContext(GlobalStateContext)    
    return (
        <div>
            <Header />
            <Bar />

            {cart.length === 0 ?             
            <EmptyCart>Carrinho vazio</EmptyCart> 
            
            :
            <CartContainer>
            <div>
                <CartH2>Produtos</CartH2>
             {cart.map((product)=>{
                return (
                    <CartCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    quantity={product.quantity}
                    />
                )
            })}
            </div>
            <CartResults />
           </CartContainer>
            }
            <CartFooterDiv>
            <Footer />
            </CartFooterDiv>
        </div>
    )
}

export default CartPage