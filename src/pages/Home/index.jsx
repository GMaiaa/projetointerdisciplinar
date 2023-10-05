import { Container, AboutContent, Section, Items } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Undraw from "../../assets/undraw.svg";
import { Item } from "../../components/Item";

export function Home() {
  return (
    <Container>
      <Header />
      <AboutContent>
        <div>
          <h2>
            {" "}
            Realize a sua <span> encomenda </span> para
            <span> Retirada </span> ou <span> entrega </span>
          </h2>
          <p>
            Qualidade é a nossa prioridade. Com cuidado e dedicação,
            selecionamos os melhores produtos frescos e sazonais para você e sua
            família.
          </p>
        </div>
        <img
          src={Undraw}
          alt="Ilustração de um homem com um carrinho de compras"
        />
      </AboutContent>

      <Section>
        <h1>Frutas</h1>
        <Items>
          <Item
            urlImage={
              "https://static.vecteezy.com/system/resources/previews/008/541/684/original/banana-fruit-transparent-png.png"
            }
            name={"Banana"}
            value={"R$8,00"}
          />
        </Items>
      </Section>
      <Footer />
    </Container>
  );
}
