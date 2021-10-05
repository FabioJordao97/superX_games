import React, {useContext} from 'react'
import { useHistory } from 'react-router'
import Bar from '../components/bar'
import CartCard from '../components/cart/cartCard'
import CartResults from '../components/cart/cartResults'
import Footer from '../components/footer'
import Header from '../components/header'
import GlobalStateContext from '../globalState/globalStateContext'
import { EmptyCartTitle, EmptyCartButtonDiv, EmptyCartButton, EmptyCartSubTitle, CartContainer, CartH2, EmptyCart} from '../styles/cartStyles'
import { CartFooterDiv } from '../styles/footerStyles'
import {goToHome} from '../router/coordinator'

const CartPage = () => {
    const {cart} = useContext(GlobalStateContext)
    const history = useHistory()    
    return (
        <div>
            <Header />
            <Bar />

            {cart.length === 0 ?  
            <EmptyCart>         
            <EmptyCartTitle>O seu carrinho está vazio.</EmptyCartTitle>
            <EmptyCartSubTitle>Que tal ir atrás do seu jogo favorito sem sair de casa?</EmptyCartSubTitle>
            <EmptyCartButtonDiv>
            <EmptyCartButton onClick={() => goToHome(history)}>Continuar comprando</EmptyCartButton>
            </EmptyCartButtonDiv>
            </EmptyCart>
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