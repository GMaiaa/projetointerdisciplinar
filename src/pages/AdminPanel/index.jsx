import {
  Container,
  Logo,
  Menu,
  Search,
  Content,
  NewItem,
  Table,
} from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiSearch, FiPlus } from "react-icons/fi";
import { Section } from "../../components/Section";
import { Product } from "../../components/Product";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from 'moment';



export function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeSection, setActiveSection] = useState("Estoque"); // Track the active section
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get("/product");
      setProducts(response.data);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get("/user");
      console.log(response);
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/order/getAllOrders");
      console.log(response);
      setOrders(response.data);
    }
    fetchOrders();
  }, []);

  const handleSectionSelected = (section) => {
    setActiveSection(section);
  };

  async function handleOrderStatus(order, event) {
    let statusSelected = event.target.value;

    if (statusSelected === "🔴 Cancelado") {
      const confirmCancel = window.confirm("Tem certeza de que deseja cancelar este pedido?");
      if (!confirmCancel) {
        return; // Se o usuário clicar em "Não", não faça nada
      }
    }

    const cart = {
      status: statusSelected,
    };

    await api.put(`/order/updateOrderStatus/${order.id}`, cart);

    if (statusSelected === "🔴 Cancelado") {
      order.status = "🔴 Cancelado"; // Atualize o status do pedido localmente para "Cancelado"
      setOrders([...orders]); // Atualize o estado dos pedidos para refletir a mudança
    } else {
      location.reload();
    }
  }

  const handleRowClick = async (orderId) => {
    try {
      const response = await api.get(`/order/getOrderById/${orderId}`);
      const order = response.data;

      // Agora você tem os detalhes do pedido e pode fazer o que quiser com eles
      console.log(order);
    } catch (error) {
      console.log(error.response)('Ocorreu um erro ao buscar os detalhes do pedido:', error);
    }
  };

  function formatDate(date) {
    const dateFormatted = moment(date).utcOffset('-03:00');

    return dateFormatted.format('DD/MM [às] HH[h]mm');
  }


  return (
    <Container>
      <Logo>
        <h1> Painel Admin</h1>
      </Logo>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Produtos"
            onClick={() => handleSectionSelected("Estoque")} // Show Estoque section
            isActive={activeSection === "Estoque"}
            isAdminPanel={true}
          />
        </li>
        <li>
          <ButtonText
            title="Pedidos"
            onClick={() => handleSectionSelected("Pedidos")} // Show Clientes section
            isActive={activeSection === "Pedidos"}
            isAdminPanel={true}
          />
        </li>
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo nome do produto"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        {activeSection === "Estoque" && (
          <Section title="Estoque">
            {products.map((product) => (
              <Product key={String(product.id)} data={product} />
            ))}
          </Section>
        )}
        {activeSection === "Pedidos" && (
          <Section title="Pedidos">
            <Table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Código</th>
                  <th>Detalhamento</th>
                  <th>Data e hora</th>
                </tr>
              </thead>
              <tbody className="order">
                {Array.isArray(orders) && orders.map((order) => (
                  <tr key={String(order.id)} onClick={() => handleRowClick(order.id)}>
                    <td>
                      <select
                        defaultValue={order.status}
                        onChange={(event) => handleOrderStatus(order, event)}
                        disabled={order.status === "🔴 Cancelado"} // Desabilita o select se o status for "Cancelado"
                      >
                        <option value="🟡 Pendente">🟡 Pendente</option>
                        <option value="🟠 Preparando">🟠 Preparando</option>
                        <option value="🟢 Entregue">🟢 Entregue</option>
                        <option value="🔴 Cancelado">🔴 Cancelado</option>
                      </select>
                    </td>
                    <td>0000{order.id}</td>
                    <td>
                      {order.items?.map((item, index) => (
                        <span key={item.productName}>
                          {item.quantity} x {item.productName}
                          {index < order.items.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </td>
                    <td>{formatDate(order.orderDate)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Section>
        )}
      </Content>

      <NewItem to="/new">
        <FiPlus />
        Adicionar novo produto
      </NewItem>
    </Container>
  );
}
