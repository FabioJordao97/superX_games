import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import GlobalStateContext from '../globalState/globalStateContext'
import {goToCart, goToHome} from '../router/coordinator'

const Header = () => {
    const {cart, counter, setCounter} = useContext(GlobalStateContext)

    const cartCounter = () => {
        let count = 0

        cart.forEach(product => {
            count += product.quantity
        })

        setCounter(count)
    }

    useEffect(() => {
        cartCounter()
    }, [cart, setCounter])
    const history = useHistory()
    return (
        <div>
            {history.location.pathname !== '/cart' ?

            <div>
                <button onClick={() => history.go(0)}>Home</button>
                <button onClick={() => goToCart(history)}>Carrinho</button>
                <p>{counter}</p>
            </div>

                :
                <div>
                    <button onClick={() => goToHome(history)}>Home</button>
                    <p>{counter}</p>
                </div>
            }
        </div>
    )
}

export default Header