import React, { useContext} from 'react'
import Header from '../components/header'
import HomeCard from '../components/home/homeCard'
import OrderBar from '../components/home/orderBar'
import GlobalStateContext from '../globalState/globalStateContext'

const HomePage = () => {

    const { products} = useContext(GlobalStateContext)    

    return (
        <div>
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