import React, {useContext} from 'react'
import GlobalStateContext from '../../globalState/globalStateContext'
import { CartPhoto, CartTitles, ProductQuantity, ProductsCart, QuantityDiv, StyledBackArrow, StyledForwardArrow } from '../../styles/cartStyles'

const CartCard = (props) => {
 
    const {cart, setCart} = useContext(GlobalStateContext)

    const increaseQuantity = (productId) => {
        const newCart = cart.map((product) => {
            if(productId === product.id){
                return{
                    ...product, quantity: product.quantity + 1
                }
            }
                return product
          })
            setCart(newCart)

    }

    const decreaseQuantity = (productID) => {
        const newProductInCart = cart.map((product) => {
            if(productID === product.id) {
                return {
                    ...product,
                    quantity: product.quantity -1
                }
            }
                return product
        })
            .filter((product) => product.quantity > 0);

            setCart(newProductInCart)
    }
    return (
        <ProductsCart>
            <CartPhoto src={props.image} alt={props.name}/>
            <div>
            <CartTitles>Nome: </CartTitles>
            <p>{props.name}</p> 
            </div>  

            <div>                             
            <CartTitles>Quantidade: </CartTitles>
            <QuantityDiv>
            <StyledBackArrow  onClick={() => decreaseQuantity(props.id)}></StyledBackArrow>
            <span>{props.quantity}</span>
            <StyledForwardArrow onClick={() => increaseQuantity(props.id)} />
            </QuantityDiv>
            </div>

            <div>
            <CartTitles>Valor: </CartTitles>
            <p>R$ {(props.price).toFixed(2)}</p>
            </div>

            <div>
            <CartTitles>Valor Total: </CartTitles>
            <p>R$ {(props.price * props.quantity).toFixed(2)}</p>
            </div>
            <fr></fr>
        </ProductsCart>
    )
}

export default CartCard