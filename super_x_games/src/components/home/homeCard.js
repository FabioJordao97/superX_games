import React, {useContext} from 'react'
import GlobalStateContext from '../../globalState/globalStateContext'
import { ButtonDiv, PhotoDiv, ProductButton, ProductCard, ProductName, ProductPhoto, ProductPrice, ProductScore } from '../../styles/homeStyles'

const HomeCard = (props) => {
    const { products, cart, setCart} = useContext(GlobalStateContext)

    const addToCart = (productId) => {
        const inCart = cart.find(product => product.id === productId)
        if (inCart) {
            const newCart = cart.map((product) => {
                if (productId === product.id) {
                    return {
                        ...product, quantity: product.quantity + 1
                    }
                }
                return product
            })
            setCart(newCart)
        } else {
            const addingToCart = products.find(product => product.id === productId)
            const newProduct = [...cart, { ...addingToCart, quantity: 1}]
            setCart(newProduct)
        }
    }
    return (
        <ProductCard>
            <ProductScore>Popularidade: {props.score}</ProductScore>
            <PhotoDiv>            
            <ProductPhoto src={props.image} alt={props.name}/>
            </PhotoDiv>
            <ProductName>{props.name}</ProductName>
            <ProductPrice>R$ {props.price.toFixed(2)}</ProductPrice>            
            <ButtonDiv>            
            <ProductButton onClick={() => addToCart(props.id)}>Adicionar ao carrinho</ProductButton>
            </ButtonDiv>
        </ProductCard>
    )
}

export default HomeCard