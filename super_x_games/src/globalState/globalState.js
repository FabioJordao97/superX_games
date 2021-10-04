import React, {useState} from 'react'
import GlobalStateContext from './globalStateContext'
import productsData from '../productsData/products.json'

const GlobalState = (props) => {
const [products, setProducts] = useState(productsData)
const [cart, setCart] = useState([])
const [counter, setCounter] = useState(0)
const [subTotal, setSubTotal] = useState(0)
const [total, setTotal] = useState(0)
const [shipping, setShipping] = useState(0)
const [totalItems, setTotalItems] = useState(0)
const [type, setType] = useState('')

const data = {products, setProducts, cart, setCart, counter, setCounter, subTotal, setSubTotal, total, setTotal, shipping, setShipping, totalItems, setTotalItems, type, setType}

return <GlobalStateContext.Provider value={data}>{props.children}</GlobalStateContext.Provider>
}

export default GlobalState