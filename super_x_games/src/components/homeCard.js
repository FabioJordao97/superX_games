import React, {useContext} from 'react'
import GlobalStateContext from '../globalState/globalStateContext'
const HomeCard = (props) => {
    const { products, cart, setCart, shipping, setShipping } = useContext(GlobalStateContext)

    const addToCart = (productId) => {
        const inCart = cart.find(product => product.id === productId)
        if (inCart) {
            const newCart = cart.map((product) => {
                if (productId === product.id) {
                    return {
                        ...product, quantity: product.quantity + 1, shipping: product.quantity * 10
                    }
                }
                return product
            })
            setCart(newCart)
        } else {
            const addingToCart = products[0].find(product => product.id === productId)
            const newProduct = [...cart, { ...addingToCart, quantity: 1, shipping: 1 * 10 }]
            setCart(newProduct)
        }
    }
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.score}</p>
            <img src={props.image} alt={props.name}/>
            <button onClick={() => addToCart(props.id)}>Adicionar ao carrinho</button>
        </div>
    )
}

export default HomeCard