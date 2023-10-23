
import styled from 'styled-components';
export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #DA951C;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #DA951C;
    color: black;
  }
  border-radius: 0.25rem;
  border: none;
  margin-top: 50px;
  margin-bottom:50px;

`;

export const Image = styled.img`
    max-width: 500px; /* Defina o tamanho máximo desejado */
    margin-left:400px;
`;

export const Container = styled.div`
  display: flex; /* Transforma o contêiner em um contêiner flex */
`;

export const Content = styled.div`
  margin-left: auto; /* Empurra o conteúdo para a direita */
  margin-right:500px;
  margin-top:100px;
`;

export const Span = styled.span`
    font-size: 30px; /* Ajuste o tamanho da fonte conforme necessário */
    color: #DA951C; /* Altera a cor do texto para #DA951C */
    font-weight:bold;
`;

export const P = styled.p`
    margin-top:10px;
    font-size: 25px; /* Ajuste o tamanho da fonte conforme necessário */

`;
export const QuantityButton = styled.div`
  width: 10px;
  margin: 0 10px; /* Adiciona margem à esquerda e à direita do botão */
`;


export const Description = styled.p`
  margin-top:10px;
  font-size: 20px; /* Diminua o tamanho da fonte conforme necessário */
  color: #808080; /* Altera a cor do texto para cinza */
`;

export const Title = styled.span`
  font-size: 30px; /* Ajuste o tamanho da fonte conforme necessário */
  color: #DA951C; /* Altera a cor do texto para #F52E17 */
  font-weight:bold;
  margin-left:150px;
`;

