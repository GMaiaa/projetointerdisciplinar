import styled from "styled-components";

export const Container = styled.div`
width: 405px;
height: 105px;
display: flex;
align-items: center;

gap: 10px;

> img{
    width: 72px;
}



> p{
    color: #878787;
    font-size: 15px;
}

> button{
border: none;
background: none;
font-size: 16px;
color: #ff6961;

}
 
`

export const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
> h1{
    font-size: 30px;
    font-weight: 500;
}

> input{
    width: 50px;
    height: 30px;

    font-weight: 500;
    
    border: 2px solid;
    border-radius: 5px;
}

> button {
    width: 30px;
    height: 30px;
    background-color: #008000; /* Verde natural */
    color: white; /* Ícones + e - brancos */
    border: none;
    border-radius: 5px; /* Bordas suaves */
    font-size: 20px; /* Linhas mais grossas para os ícones + e - */
    font-weight: bold; /* Linhas mais grossas para os ícones + e - */
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
      background-color: #808080; /* Cinza quando desativado */
      cursor: not-allowed; /* Cursor não clicável quando desativado */
    }
  }
`