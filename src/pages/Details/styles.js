import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content"
    "more";

  > main {
    grid-area: content;
    padding: 64px 0;
  }
`;

export const More = styled.div`
grid-area: more;
max-width: 1300px;
  margin: 0 auto;
`

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #da951c;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #da951c;
    color: black;
  }
  border-radius: 0.25rem;
  border: none;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Content = styled.div`
   max-width: 1300px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  gap: 300px;

  > img {
    max-width: 450px; /* Defina o tamanho máximo desejado */
  } /* Transforma o contêiner em um contêiner flex */
`;

export const Info = styled.div`
  margin-top: 100px;

  > span {
    font-size: 30px; /* Ajuste o tamanho da fonte conforme necessário */
    color: #da951c; /* Altera a cor do texto para #DA951C */
    font-weight: bold;
  }

  > p {
    margin-top: 10px;
    font-size: 25px;
  }

  

  > button {
    width: 200px;
    height: 50px;
    background-color: #da951c;
    color: white;
    font-weight: bold;
    transition: background-color 0.3s;
    &:hover {
      background-color: #da951c;
      color: black;
    }
    border-radius: 0.25rem;
    border: none;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const QuantityButton = styled.div`
  width: 10px;
  margin: 0 10px; /* Adiciona margem à esquerda e à direita do botão */
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 20px; /* Diminua o tamanho da fonte conforme necessário */
  color: #808080; /* Altera a cor do texto para cinza */
`;

export const Title = styled.span`
  font-size: 30px; /* Ajuste o tamanho da fonte conforme necessário */
  color: #da951c; /* Altera a cor do texto para #F52E17 */
  font-weight: bold;
`;
