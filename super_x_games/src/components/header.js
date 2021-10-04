import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import GlobalStateContext from '../globalState/globalStateContext'
import { goToCart, goToHome } from '../router/coordinator'
import { CartCount, CartCounter, CartIcon, HeaderDiv, Super, X } from '../styles/headerStyles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import superIcon from '../assets/super.png';
import xIcon from '../assets/x.png';



const Header = () => {
    const { cart, counter, setCounter } = useContext(GlobalStateContext)

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

                <HeaderDiv>
                    <div>
                        <Super src={superIcon} alt={'Super do logo da SuperX'} onClick={() => history.go(0)} />
                        <X src={xIcon} alt={'X do logo da SuperX'} onClick={() => history.go(0)} />
                    </div>
                    <CartCounter>
                        <CartIcon>
                            <ShoppingCartIcon color={'white'} onClick={() => goToCart(history)}></ShoppingCartIcon>
                        </CartIcon>
                        <CartCount>({counter})</CartCount>
                    </CartCounter>
                </HeaderDiv>

                :
                <HeaderDiv>
                    <div>
                        <Super src={superIcon} alt={'Super do logo da SuperX'} onClick={() => goToHome(history)} />
                        <X src={xIcon} alt={'X do logo da SuperX'} onClick={() => goToHome(history)} />
                    </div>
                    <CartCounter>
                        <CartIcon>
                            <ShoppingCartIcon></ShoppingCartIcon>
                        </CartIcon>
                        <CartCount>({counter})</CartCount>
                    </CartCounter>
                </HeaderDiv>
            }
        </div>
    )
}

export default Header