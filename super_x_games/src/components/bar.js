import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import GlobalStateContext from "../globalState/globalStateContext";

const Bar = () => {
    const {products, setProducts, type, setType, setCart} = useContext(GlobalStateContext)
    const history = useHistory()
    useEffect(() => {
        setType('')      
        sortData()
      }, [type])
  
     const sortData = () => {
  
      switch(type) {
        case "alphabeticalUP":
          products.sort(function(a,b) {
            return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
          })
          setProducts(products)
          break;
  
          case "alphabeticalDown":
          products.sort(function(a,b) {
            return (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0
          })
          setProducts(products)
          break;
        case "priceUP":
          products.sort(function(a,b) {
            return (a.price < b.price) ? 1 : (a.price > b.price) ? -1 : 0
          })
          setProducts(products)
          break;
          case "priceDown":
          products.sort(function(a,b) {
            return (a.price < b.price) ? -1 : (a.price > b.price) ? 1 : 0
          })
          setProducts(products)
          break;
        case "scoreUP":
          products.sort(function(a,b) {
            return (a.score < b.score) ? -1 : (a.score > b.score) ? 1 : 0
          })
          setProducts(products)
          break;  
          case "scoreDown":
          products.sort(function(a,b) {
            return (a.score < b.score) ? 1 : (a.score > b.score) ? -1 : 0
          })
          setProducts(products)
          break; 
        default: 
          return setProducts(products)
      }
    }

    const clearCart = () => {
      setCart([])
    }
    return (
        <div>
          {history.location.pathname === '/' ? 
            <select onChange={(event) => setType(event.target.value)}>
                <option value=''>Escolha</option>
                <option value="alphabeticalUP">Ordem Alfabética A ⇑ Z</option>
                <option value="alphabeticalDown">Ordem Alfabética Z ⇓ A</option>
                <option value="priceDown">Preço crescente</option>
                <option value="priceUP">Preço decrescente</option>                
                <option value="scoreUP">Popularidade crescente</option>
                <option value="scoreDown">Popularidade decrescente</option>
            </select>

            :

            <div>
              <button onClick={() => clearCart()}>Limpar</button>
            </div>
            }
        </div>
    )
}

export default Bar