import styled from 'styled-components'
import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined'
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined'

export const EmptyCart = styled.div`
padding-top: 5vh;
`

export const EmptyCartTitle = styled.p`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: bold;
`
export const EmptyCartSubTitle = styled.p`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-style: italic;
`

export const EmptyCartButtonDiv = styled.div`
display: flex;
justify-content: center;
padding-top: 5vh;
`
export const EmptyCartButton = styled.button`
padding: 25px 25px 25px 25px;
border-radius: 10px;
background-color: #BB2B3B;
color: white;
font-weight: bold;
&:hover{
  padding: 35px 35px 35px 35px;
  cursor: pointer;
}
`

export const CartResultsDiv = styled.div`
text-align: center;
margin-left: 30vw;
margin-top: 2vh;
`

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  padding: 5px;
  margin-top: 2vh;
  margin-bottom: 2vh;
`

export const ProductsCart = styled.div`
display: flex;
justify-content: space-between;
border: 1px;
border-style: ridge;
margin-bottom: 1px;
`

export const CartPhoto = styled.img`
width: 100px;
height: 100px;
margin-bottom: 2vh;
`

export const CartTitles = styled.p`
text-align: center;
font-weight: bold;
color: #BB2B3B;
`

export const CartH2 = styled.h2`
margin-left: 2vh;
`

export const StyledBackArrow =  styled(ArrowBackIosOutlined)`
color: #BB2B3B;
&:hover{
  cursor: pointer;
}
`


export const StyledForwardArrow =  styled(ArrowForwardIosOutlined)`
color: #BB2B3B;
&:hover{
  cursor: pointer;
}
`

export const QuantityDiv = styled.div`
display: flex;
justify-content: space-between;
`

export const FreeShipping = styled.span`
color: #BB2B3B;
font-weight: bold
`