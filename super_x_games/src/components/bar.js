import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import GlobalStateContext from "../globalState/globalStateContext";
import { BarDiv, BarH2, CleartCartSpan, SelectDiv, Sort, SortOptions, SortSelect, CartBarH2, DeleteIcon } from "../styles/barStyles";
import DeleteOutlineOutlined from "@material-ui/icons/DeleteOutlineOutlined";

const Bar = () => {
  const { products, setProducts, type, setType, setCart } = useContext(GlobalStateContext)
  const history = useHistory()
  useEffect(() => {
    setType('')
    sortData()
  }, [type])

  const sortData = () => {

    switch (type) {
      case "alphabeticalUP":
        products.sort(function (a, b) {
          return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
        })
        setProducts(products)
        break;

      case "alphabeticalDown":
        products.sort(function (a, b) {
          return (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0
        })
        setProducts(products)
        break;
      case "priceUP":
        products.sort(function (a, b) {
          return (a.price < b.price) ? 1 : (a.price > b.price) ? -1 : 0
        })
        setProducts(products)
        break;
      case "priceDown":
        products.sort(function (a, b) {
          return (a.price < b.price) ? -1 : (a.price > b.price) ? 1 : 0
        })
        setProducts(products)
        break;
      case "scoreUP":
        products.sort(function (a, b) {
          return (a.score < b.score) ? -1 : (a.score > b.score) ? 1 : 0
        })
        setProducts(products)
        break;
      case "scoreDown":
        products.sort(function (a, b) {
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
        <BarDiv>
          <BarH2>SuperX Games - Games para o gamer de verdade!</BarH2>
          <SelectDiv>
          <Sort>Ordenar </Sort>
          <SortSelect onChange={(event) => setType(event.target.value)}>
          <SortOptions value=''>Escolha</SortOptions>
          <SortOptions value="alphabeticalUP">Ordem Alfabética A ⇑ Z</SortOptions>
          <SortOptions value="alphabeticalDown">Ordem Alfabética Z ⇓ A</SortOptions>
          <SortOptions value="priceDown">Preço crescente</SortOptions>
          <SortOptions value="priceUP">Preço decrescente</SortOptions>
          <SortOptions value="scoreUP">Popularidade crescente</SortOptions>
          <SortOptions value="scoreDown">Popularidade decrescente</SortOptions>
        </SortSelect>
        </SelectDiv>
        </BarDiv>
       

        :

        <BarDiv>
          <CartBarH2>SuperX Games - Games para o gamer de verdade!</CartBarH2>
            <CleartCartSpan onClick={() => clearCart()}>Esvaziar carrinho</CleartCartSpan>
            <DeleteIcon>
            <DeleteOutlineOutlined onClick={() => clearCart()}></DeleteOutlineOutlined>
            </DeleteIcon>        
        </BarDiv>
      }
    </div>
  )
}

export default Bar