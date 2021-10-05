import React, { useContext, useEffect } from 'react'
import GlobalStateContext from '../../globalState/globalStateContext';
import { CartResultsDiv, FreeShipping } from '../../styles/cartStyles';

const CartResults = () => {

      const {cart, setTotalItems, setSubTotal, setShipping, setTotal, subTotal, totalItems, shipping, total} = useContext(GlobalStateContext)

    const cartTotal = () => {
        let product = 0;
        let price = 0;
        let shipping = 0
    
        cart.forEach((products) => {
          product += products.quantity;
          price += products.quantity * products.price
          shipping += products.quantity * 10.00
        })
    
        setTotalItems(product)
        setSubTotal(price.toFixed(2))
        setShipping(`R$ ${shipping.toFixed(2)}`)

        if(price > 250){
            setShipping(<FreeShipping>Grátis!</FreeShipping>)
            setTotal(price.toFixed(2))
        } else {
            setTotal((price + shipping).toFixed(2))
        }
    
      }

      useEffect(() => {
        cartTotal()
      }, [cart, totalItems, subTotal, shipping, setSubTotal, setTotalItems, setShipping])
    return (
        <CartResultsDiv>
          <h2>Resumo</h2>
          <p>Quantidade: {totalItems}</p>
            <p>Frete: {shipping}</p>
            <p>Subtotal: R$ {subTotal}</p>
            <p>Total: R$ {total}</p>
        </CartResultsDiv>
    )
}

export default CartResults