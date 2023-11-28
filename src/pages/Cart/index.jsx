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
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

export function Cart() {

  const formik = useFormik({

    validate: (values) => {
      const errors = {}
      console.log(values.cep)
      if (!values.client) {
        errors.client = "Campo obrigatório"
      } if (!values.cpf) {
        errors.cpf = "Campo obrigatório"
      } if (!values.email) {
        errors.email = "Campo obrigatório"
      } if (!values.phoneNumber) {
        errors.phoneNumber = "Campo obrigatório"
      } if (values.deliveryMethod === "delivery") {
        if (!cep) {
          setCepError("Campo obrigatório")
        } if (!cep && cep.length != 9
        ) {
          setCepError("CEP inválido")
        } if (!adress) {
          errors.adress = "Campo obrigatório"
        } if (!values.adressNumber) {
          errors.adressNumber = "Campo obrigatório"
        }
      } return errors

    },

    initialValues: {
      deliveryMethod: 'pickup',
      client: "",
      cpf: "",
      email: "",
      phoneNumber: "",
      adressNumber: "",
      paymentMethod: "none",
      complement: "",
    },
    onSubmit: async (values) => {
      try {
        await api.post("/cart/confirmPurchase", {
          client: values.client,
          cpf: values.cpf,
          email: values.email,
          cep: cep,
          adress: adress,
          adressNumber: deliveryMethod === "delivery" ? values.adressNumber : null,
          phoneNumber: values.phoneNumber,
          paymentMethod: deliveryMethod === "delivery" ? values.paymentMethod : null,
          complement: deliveryMethod === "delivery" ? values.complement : null,
          deliveryType: deliveryMethod === "delivery" ? "Delivery" : "Pickup", // Adicione esta linha
        });

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
    },
    validateOnChange: false
  });

  const [cep, setCep] = useState("");
  const [cepError, setCepError] = useState(null);
  const [adress, setAdress] = useState("");
  const [totalValue, setTotalValue] = useState(0);
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  function backHome() {
    navigate("/");
  }

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  async function fetchAddress(cep) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
    }
  }

  function handleRadioButtons(e) {
    formik.setFieldValue('deliveryMethod', e.target.value);
    setDeliveryMethod(e.target.value);
    if (e.target.value === "delivery") {
      setDeliveryType("Delivery");
    } else if (e.target.value === "pickup") {
      setDeliveryType("Pickup");
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
    fetchItems();
  }, []);

  useEffect(() => {
    const formatedCEP = cep.replace("-", "")
    if (cep.length === 9) { // Verifique se o CEP tem 8 dígitos
      fetchAddress(formatedCEP).then((address) => {
        if (address && !address.erro) {
          setAdress(address.logradouro); // Atualize o estado do endereço
        }
      });
    }
  }, [cep]); // Chame essa função sempre que o valor do CEP mudar


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
            <form onSubmit={formik.handleSubmit}>
              <Input
                placeholder="Nome Completo"
                icon={BiSolidUser}
                name="client"
                onChange={formik.handleChange}
                value={formik.values.client}
                errors={formik.errors.client}
              />
              <Input
                mask="999.999.999-99"
                maskChar={null}
                placeholder="CPF"
                icon={BiSolidUser}
                name="cpf"
                onChange={formik.handleChange}
                value={formik.values.cpf}
                errors={formik.errors.cpf}
              />
              <Input
                placeholder="E-mail"
                icon={MdEmail}
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                errors={formik.errors.email}
              />
              <Input
                placeholder="Celular"
                mask="(99) 99999-9999"
                maskChar={null}
                icon={BiSolidPhone}
                name="phoneNumber"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                errors={formik.errors.phoneNumber}
              />
              <RadioContainer>
                <label>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="delivery"
                    checked={deliveryMethod === "delivery"}
                    onChange={handleRadioButtons}
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
                    onChange={handleRadioButtons}
                  />
                  <span class="checkmark"></span>
                  Retirada
                </label>
              </RadioContainer>
              {deliveryMethod === "delivery" && (
                <>
                  <Input
                    mask="99999-999"
                    maskChar={null}
                    placeholder="CEP"
                    icon={BiCurrentLocation}
                    name="cep"
                    onChange={(e) => setCep(e.target.value)}
                    value={cep}
                    errors={cepError}
                  />
                  <Input
                    placeholder="Endereço"
                    icon={BiSolidBuildingHouse}
                    onChange={(e) => setAdress(e.target.value)}
                    value={adress}
                    errors={formik.errors.adress}
                    // value={adress} // Use o estado do endereço como valor
                    readOnly // Adicione esta linha
                  />
                  <Input
                    placeholder="Número"
                    icon={BiSolidBuildingHouse}
                    name="adressNumber"
                    onChange={formik.handleChange}
                    value={formik.values.adressNumber}
                    errors={formik.errors.adressNumber}
                  />
                  <Input
                    placeholder="Complemento (Opcional)"
                    icon={BiSolidBuildingHouse}
                    name="complement"
                    onChange={formik.handleChange}
                    value={formik.values.complement}
                    errors={formik.errors.complement}
                  />
                  <Select
                    name="paymentMethod"
                    onChange={((e) => handlePaymentMethodChange(e.target.value), formik.handleChange)}
                    value={formik.values.paymentMethod}
                  >
                    <option value="none" disabled>Forma de pagamento</option>
                    <option value="Dinheiro" selected={true}>Dinheiro</option>
                    <option value="Débito">Débito</option>
                    <option value="Crédito">Crédito</option>
                  </Select>
                </>
              )}
              <Button title="Finalizar Pedido" type="submit" />
              <AlternativeButton title="Continuar comprando" onClick={backHome} />
            </form>
          </Info>
        </AboutOrder>
      </Content>
    </Container>
  );
}