import { InformativePage } from "../../components/InformativePage";
import PaymentUndraw from "../../assets/paymentUndraw.svg"
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

export function PaymentMethods(){
    return(
        <Container>
            <Header/>
<InformativePage title="Formas de pagamentos" text="Prezados clientes do Hortifruti Quitanda Frescor,
        
        Para os pedidos com entrega em domicílio, estamos aceitando pagamentos em dinheiro, débito e crédito, oferecendo opções flexíveis para atender às suas preferências de pagamento. Queremos garantir que sua jornada de compras seja conveniente e adaptada às suas necessidades.
        
        Além disso, para aqueles que desejam retirar pessoalmente seus produtos em nossa loja, informamos que não é necessário antecipar o método de pagamento. Estamos prontos para atendê-los no momento da retirada, aceitando diversas formas de pagamento no local, para que você possa escolher a opção mais conveniente na hora.
        
        No Hortifruti Quitanda Frescor, nosso compromisso é fornecer produtos frescos e de qualidade, aliados a um serviço que valoriza sua comodidade e praticidade. Queremos simplificar seu processo de compra, oferecendo flexibilidade no pagamento para melhor atendê-lo." image={PaymentUndraw} alt="Formas de pagamento"/>
        </Container>
        
    )
}