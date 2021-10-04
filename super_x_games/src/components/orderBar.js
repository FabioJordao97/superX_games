import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../globalState/globalStateContext";

const OrderBar = () => {
    const {products, setProducts, type, setType} = useContext(GlobalStateContext)

    useEffect(() => {
        setType('')      
        sortData()
      }, [type])
  
     const sortData = () => {
  
      switch(type) {
        case "alphabeticalUP":
          products.sort(function(a,b) {
            return (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0
          })
          setProducts(products)
          break;
  
          case "alphabeticalDown":
          products.sort(function(a,b) {
            return (a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? -1 : 0
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
    return (
        <div>
            <select onChange={(event) => setType(event.target.value)}>
                <option value=''>Escolha</option>
                <option value="alphabeticalUP">Ordem Alfabética A ⇑ Z</option>
                <option value="alphabeticalDown">Ordem Alfabética Z ⇓ A</option>
                <option value="priceDown">Preço crescente</option>
                <option value="priceUP">Preço decrescente</option>                
                <option value="scoreUP">Popularidade crescente</option>
                <option value="scoreDown">Popularidade decrescente</option>
            </select>
        </div>
    )
}

export default OrderBar