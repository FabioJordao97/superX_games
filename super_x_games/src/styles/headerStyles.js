import styled from 'styled-components'

export const HeaderDiv = styled.div`
display: flex;
justify-content: space-between;
text-align: center;
background-color: #0F0F10;
width: 100%;
`

export const CartCounter = styled.div`
display: flex;
justify-content: flex-end;
padding-top: 5vh;
`


export const CartIcon = styled.div`
padding-top: 3vh;
padding-right: 4%;
&:hover{
    cursor: pointer
}`

export const CartCount = styled.p`
margin-right: 20px;
margin-bottom: 5px;
color: white;
`

export const Super = styled.img`
width: 15vw;
height: 15vh;
&:hover{
    cursor: pointer;
}
`

export const X = styled.img`
width: 15vw;
height: 15vh;
padding-bottom: 2vh;
margin-left: -2vh;
&:hover{
    cursor: pointer;
}
`