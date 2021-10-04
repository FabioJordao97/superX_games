import React, { useContext} from 'react'
import { useHistory } from 'react-router'
import Header from '../components/header'
import HomeCard from '../components/homeCard'
import OrderBar from '../components/orderBar'
import GlobalStateContext from '../globalState/globalStateContext'
import { goToCart } from '../router/coordinator'

const HomePage = () => {

    const { products} = useContext(GlobalStateContext)
    const history = useHistory()      

    return (
        <div>
            <button onClick={() => goToCart(history)}>Carrinho</button>
            <Header />
            <OrderBar />
            {products.map((product) => {
                return (
                    <HomeCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        score={product.score}
                        image={product.image}
                    />
                )
            })}
        </div>
    )
}

export default HomePage