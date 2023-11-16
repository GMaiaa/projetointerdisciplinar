import {
  Container,
  Order,
  ItemsCart,
  Info,
  Form,
  Payment,
  Options,
  Content,
  AboutOrder,
  RadioContainer,
  Select,
  TotalValue
} from "./styles";
import { Header } from "../../components/Header";
import { ItemCart } from "../../components/ItemCart";
import { Input } from "../../components/Input";
import {
  BiSolidUser,
  BiCurrentLocation,
  BiSolidBuildingHouse,
  BiSolidPhone,
} from "react-icons/bi";
import { MdEmail, MdOutlinePayment } from "react-icons/md";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { AlternativeButton } from "../../components/AlternativeButton";
import { api } from "../../services/api";
import { Item } from "../../components/Item";
import { useNavigate } from "react-router-dom";


export function Cart() {
  const [client, setClient] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [adressNumber, setAdressNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [totalValue, setTotalValue] = useState(0);

  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  function handleCpfChange(value) {
    // Remove todos os caracteres não numéricos
    let cpf = value.replace(/\D/g, "");

    // Limita a entrada para 11 dígitos
    cpf = cpf.slice(0, 11);

    // Formata o CPF
    cpf = formatCpf(cpf);

    setCpf(cpf);
  }

  function formatCpf(value) {
    // Remove todos os caracteres não numéricos
    let cpf = value.replace(/\D/g, "");


    // Adiciona um ponto após o terceiro e o sexto dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");

    // Adiciona um hífen após o nono dígito
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return cpf;
  }

  function backHome() {
    navigate("/");
  }

  const handleDeliveryMethodChange = (method) => {
    setDeliveryMethod(method);
  };

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  async function handleFinishOrder() {
    console.log({
      client,
      cpf,
      email,
      cep: deliveryMethod === "delivery" ? cep : null,
      adressNumber: deliveryMethod === "delivery" ? adressNumber : null,
      phoneNumber,
      paymentMethod: deliveryMethod === "delivery" ? paymentMethod : null,
    });

    try {

      await api.post("/cart/confirmPurchase", {
        client,
        cpf,
        email,
        cep: deliveryMethod === "delivery" ? cep : null,
        adressNumber: deliveryMethod === "delivery" ? adressNumber : null,
        phoneNumber,
        paymentMethod: deliveryMethod === "delivery" ? paymentMethod : null,
      },);

      alert("Pedido realizado com sucesso!");
      backHome();
    } catch (error) {
      console.error("Erro ao finalizar o pedido:", error.response);

      if (error.response) {
        console.error("Status do erro:", error.response.status);
        console.error("Dados do erro:", error.response.data);
      }

      alert("Erro ao finalizar o pedido. Por favor, tente novamente.");
    }
  }

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await api.get("/cart/getAllCartItems");
        console.log(response);

        if (response.data && response.data.items) {
          setItems(response.data.items);

          // Verifique se 'response.data.totalValue' existe antes de atualizar o estado
          if (response.data.totalValue !== undefined) {
            setTotalValue(response.data.totalValue);
          } else {
            console.error("A resposta da API não contém 'totalValue'.", response);
          }
        } else {
          console.error("Resposta da API não possui a propriedade 'items'.", response);
        }
      } catch (error) {
        console.error("Erro ao buscar itens do carrinho:", error);
      }
    }

    // Chame updateTotalValue sempre que o componente for montado


    fetchItems();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <AboutOrder>
          <Order>
            <h1>Meu Pedido</h1>
            <ItemsCart>
              {Array.isArray(items) && items.length > 0 ? (
                items.map((item) => (
                  <ItemCart key={String(item.id)} data={item} />
                ))

              ) : (
                <p>Nenhum item no carrinho</p>
              )}
              <TotalValue>{totalValue.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              })}</TotalValue>

            </ItemsCart>
          </Order>
          <Info>
            <h1>Dados do Pedido</h1>
            <Form>
              <Input
                placeholder="Nome Completo"
                icon={BiSolidUser}
                onChange={(e) => setClient(e.target.value)}
              />
              <Input
                placeholder="CPF"
                icon={BiSolidUser}
                value={cpf}
                onChange={(e) => handleCpfChange(e.target.value)}
              />
              <Input
                placeholder="E-mail"
                icon={MdEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Celular"
                icon={BiSolidPhone}
                onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
              />
              <RadioContainer>
                <label>
                  <input
                    type="radio"
                    value="delivery"
                    checked={deliveryMethod === "delivery"}
                    onChange={() => handleDeliveryMethodChange("delivery")}
                  />
                  <span class="checkmark"></span>
                  Entrega
                </label>
              </RadioContainer>
              <RadioContainer>
                <label>
                  <input
                    type="radio"
                    value="pickup"
                    checked={deliveryMethod === "pickup"}
                    onChange={() => handleDeliveryMethodChange("pickup")}
                  />
                  <span class="checkmark"></span>
                  Retirada
                </label>
              </RadioContainer>
              {deliveryMethod === "delivery" && (
                <>
                  <Input
                    placeholder="CEP"
                    icon={BiCurrentLocation}
                    onChange={(e) => setCep(e.target.value)}
                  />
                  <Input
                    placeholder="Número"
                    icon={BiSolidBuildingHouse}
                    onChange={(e) => setAdressNumber(e.target.value)}
                  />
                  <Select
                    onChange={(e) => handlePaymentMethodChange(e.target.value)}
                  >
                    <option value="none">Forma de pagamento</option>
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Débito">Débito</option>
                    <option value="Crédito">Crédito</option>
                  </Select>
                </>
              )}
              <Button title="Finalizar Pedido" onClick={handleFinishOrder} />
              <AlternativeButton title="Continuar comprando" onClick={backHome} />
            </Form>
          </Info>
        </AboutOrder>
      </Content>
    </Container>
  );
}
