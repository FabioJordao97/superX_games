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
&:hover{
    cursor: pointer
}
`

export const DeleteDiv = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 4vh;
border: 1px black;
margin-bottom: 20px;
border-style: solid;
&:hover{
    padding: 5px 5px 5px 5px;
    cursor: pointer;
}
`

export const CartBarH2 = styled.h2`
display: inline;
padding-left: 22vw;
`