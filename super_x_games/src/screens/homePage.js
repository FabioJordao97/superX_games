import React, { useContext} from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import HomeCard from '../components/home/homeCard'
import Bar from '../components/bar'
import GlobalStateContext from '../globalState/globalStateContext'

const HomePage = () => {

    const { products} = useContext(GlobalStateContext)    

    return (
        <div>
            <Header />
            <Bar />
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
            <Footer />
        </div>
    )
}

export default HomePage