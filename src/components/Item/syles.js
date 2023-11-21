import styled from "styled-components";

export const Container = styled.li`
  height: 254px;
  border-radius: 20px;
  background: white;
  padding: 1.8rem;
  overflow: visible;
  font-size: 24px; /* Tamanho dos itens da lista de produtos */
  margin-bottom: 10px;
  transition: all 0.6s ease;
  list-style: none;
  cursor: pointer;


  > img{
    width: 120px;
    height: 120px;
    object-fit: contain;
}

> h1 {
    font-size: 25px; /* Tamanho da fonte em pixels */
    font-weight: normal; /* Remove o negrito */
    color: #7A7A7A; /* Cor #7A7A7A (cinza) */
}
/* Ajustando o preco do produto */
> p{
font-size: 18px; /* Tamanho da fonte em pixels */
color: black; /* Cor #7A7A7A (cinza) */
}
/* Estilizando o botão */
> button {
    width: 153px;
    height: 40px;
    background-color: #D4EAE2;
    color: #24A076;
    font-weight: bold; /* Texto em negrito */
    transition: background-color 0.3s; /* Transição suave de cor de fundo */
    &:hover {
        background-color: #24A076;
        color: white;
    }
    border-radius: 0.25rem;
    border: none;
    margin-top: 20px;
}

&:hover{
    box-shadow: rgba(255, 172, 28, 0.199) -10px 10px, rgba(255, 172, 28, 0.19) -20px 20px ;
}

`;
