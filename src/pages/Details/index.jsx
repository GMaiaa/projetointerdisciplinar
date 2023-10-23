import { Container, Content, Description, Commands } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <Header />
      <Content>
        <img src="https://hortifruti.com.br/media/catalog/product/1/0/100173-maca-gala-importada-unidade.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover" />

        <Description>
          <h1> Maça </h1>

          <p>Maçã Gala Importada Unidade (Unidade com aprox. 190g)</p>

          <h2> R$ 2,85 </h2>
        </Description>
      </Content>
      <Commands>
        <Button title="Voltar ao catálogo" />
        <Button title="Adicinar ao carrinho" />
      </Commands>
    </Container>
  );
}
