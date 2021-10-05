import styled from 'styled-components'
import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined'
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined'

export const EmptyCart = styled.p`
display: flex;
justify-content: center;
align-items: center;
`

export const CartResultsDiv = styled.div`
text-align: center;
margin-left: 30vw;
margin-top: 3vh;
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