import { InformativePage } from "../../components/InformativePage";
import ExchangeSVG from "../../assets/exchangepolicy.svg";
import { Container } from "./styles";
import { Header } from "../../components/Header";

export function ExchangeAndTrade() {
  return (
    <Container>
      <Header />
      <InformativePage
        title="Política de Troca / Estorno"
        text="Produtos Danificados ou com Qualidade Comprometida: Caso receba um produto danificado ou com qualidade abaixo do esperado, pedimos gentilmente que entre em contato conosco em até 24 horas após o recebimento. Para agilizar o processo, solicitamos que nos forneça fotos que evidenciem o estado do produto.

Erros de Entrega: Em situações onde houve um equívoco em relação ao produto entregue, seja na quantidade, tipo ou variedade, entre em contato conosco imediatamente para providenciarmos a troca pelo item correto.

Troca por Arrependimento: Se por algum motivo você se arrependeu da compra, aceitaremos a devolução do produto desde que esteja em perfeitas condições, sem indícios de uso e na embalagem original. Nesse caso, solicitamos que entre em contato conosco em até 7 dias após o recebimento."
        image={ExchangeSVG}
        alt="Politica de trocas"
      />
    </Container>
  );
}
