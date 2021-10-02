import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import HomeCard from '../components/homeCard'
import GlobalStateContext from '../globalState/globalStateContext'
import { goToCart } from '../router/coordinator'

const HomePage = () => {

    const { products, setProducts, order, setOrder, type, setType } = useContext(GlobalStateContext)
    const history = useHistory()
    console.log(type)  
    
    useEffect(() => sortData(), [type])


   const sortData = () => {

    switch(type) {
      case "alphabetical":
        products.sort(function(a,b) {
          return (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0
        })
        setProducts(products)
        break;
      case "price":
        products.sort(function(a,b) {
          return (a.price < b.price) ? -1 : (a.price > b.price) ? 1 : 0
        })
        setProducts(products)
        break;
      case "score":
        products.sort(function(a,b) {
          return (a.score < b.score) ? -1 : (a.score > b.score) ? 1 : 0
        })
        setProducts(products)
        break;   
      default: 
        return setProducts(products)
    }
  }

    return (
        <div>
            <button onClick={() => goToCart(history)}>Carrinho</button>
            <select onChange={(event) => setType(event.target.value)}>
                <option></option>
                <option value="alphabetical">Ordem Alfabética</option>
                <option value="price">Preço</option>
                <option value="score">Popularidade</option>
            </select>

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