import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  padding: 5px;
  margin-top: 2vh;
  margin-bottom: 2vh;
`

export const ProductCard = styled.div`
border: 1px;
box-shadow: 0px 2px 11px 1px;
margin-top: 2vh;
`

export const ProductButton = styled.button`
display: flex;
justify-content: flex-end;
color: #BB2B3B;
border-radius: 10px;
background-color: white;
padding: 5px 5px 5px 5px;
&:hover{
background-color: #BB2B3B;
cursor: pointer;
color: white;
}
`

export const ButtonDiv = styled.div`
margin-bottom: 2vh;
margin-left: 2vh;
`

export const ProductName = styled.p`
text-align: center;
font-size: 12px;
font-weight: bold;
`

export const ProductPrice = styled.p`
color: #BB2B3B;
font-weight: bold;
margin-top: -2vh;
margin-left: 2vh;
`

export const ProductPhoto = styled.img`
margin-top: 1vh;

`

export const PhotoDiv = styled.div`
display: flex;
justify-content: center;
`

export const ProductScore = styled.p`
display: flex;
justify-content: flex-end;
margin-right: 2vw;
`

export const ScoreDiv = styled.div`
display: flex;
justify-content: flex-end;
`