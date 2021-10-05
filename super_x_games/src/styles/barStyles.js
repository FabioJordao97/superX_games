import styled from 'styled-components'

export const BarDiv = styled.div`
display: flex;
justify-content: space-evenly;
background-color: #BB2B3B;
`

export const SelectDiv = styled.div`
text-align: center;
padding-top: 27px;
`

export const BarH2 = styled.h2`
display: inline;
padding-left: 20vw;
`

export const Sort = styled.span`
font-weight: bold;
`

export const SortSelect = styled.select`
border-radius: 1vh 1vh;
font-family: 'Courier New', Courier, monospace;
`

export const SortOptions = styled.option`
font-family: 'Courier New', Courier, monospace;
`

export const CleartCartSpan = styled.span`
font-weight: bold;
padding-top: 25px;
margin-right: -5vw;
&:hover{
    cursor: pointer
}

`

export const DeleteIcon = styled.div`
display: inline;
padding-top: 25px;
&:hover{
    cursor: pointer
}
`

export const CartBarH2 = styled.h2`
display: inline;
padding-left: 22vw;
`