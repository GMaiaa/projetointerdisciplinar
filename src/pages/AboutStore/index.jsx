import { InformativePage } from "../../components/InformativePage";
import EmptyCart from "../../assets/emptycart.svg";
import { Container } from "./styles";
import { Header } from "../../components/Header";

export function AboutStore() {
  return (
    <Container>
      <Header />
      <InformativePage
        title="Sobre a loja"
        text={(
            <div>
              Na agitação do dia a dia, encontrar um lugar que ofereça não apenas produtos frescos, mas uma experiência que desperte os sentidos é uma verdadeira dádiva. É exatamente isso que a Quitanda Frescor oferece: um refúgio de aromas, cores e sabores que resgatam a autenticidade dos alimentos.
              <br /><br />
              Localizada no coração da cidade, a Quitanda Frescor é mais do que uma simples loja de produtos naturais; é um ponto de encontro para os amantes da boa comida e de um estilo de vida saudável. Desde a sua fachada convidativa até o interior repleto de variedades, cada detalhe é pensado para transmitir a sensação de estar em contato direto com a natureza.
            </div>
          )}
        image={EmptyCart}
        alt="Sobre a loja"
      />
    </Container>
  );
}
