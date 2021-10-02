import React, {useContext} from 'react'
import GlobalStateContext from '../globalState/globalStateContext'

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
        <div>
             <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.score}</p>
            <p>{props.quantity}</p>
            <p>{props.shipping}</p>
            <img src={props.image} alt={props.name}/>
            <button onClick={() => increaseQuantity(props.id)}>Adicionar mais um</button>
            <button onClick={() => decreaseQuantity(props.id)}>Remover um</button>
        </div>
    )
}

export default CartCard