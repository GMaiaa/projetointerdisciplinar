import { Container, AboutSupport, Questions, Items } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Undraw from "../../assets/suport.svg";
import Troca from "../../assets/troca.jpg"
import Pagamento from "../../assets/pagamento.jpg";
import Info from "../../assets/info.jpg"
import { Card } from "../../components/Card";
import { ButtonText } from "../../components/ButtonText";
import { SupportCard } from "../../components/SupportCard";


export function Support() {
  return (
    <Container>
      <Header />
      <AboutSupport>
        <img
          src={Undraw}
          alt="Ilustração de um homem com um carrinho de compras"
        />
        <div>
          <h2>SUPORTE</h2>
          <p>
            Na Quitanda frescor, estamos dedicados a fornecer a melhor
            experiência possível aos nossos clientes. Sabemos que,
            ocasionalmente, surgem dúvidas, preocupações ou problemas técnicos,
            e é por isso que estamos aqui para ajudar.
          </p>
        </div>
      </AboutSupport>

    <Questions>
        <SupportCard image={Troca} title="Política de Troca / Estorno" description="Saiba detalhes de trocas e estornos de um produto." />
        <SupportCard image={Pagamento} title="Formas de pagamento" description="Saiba as formas de pagamentos que aceitamos no momento da entrega" />
        <SupportCard image={Info} title="Informações da loja" description="Informações como endereço, horario de funcionamento e muito mais "/>

    </Questions>


      <Footer />
    </Container>
  );
}
