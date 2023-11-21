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

  function handleDeleteProduct(id) {
    // Remova o produto da lista de produtos
    setProducts(products.filter(product => product.id !== id));
  }

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
    // Carregar pedidos do servidor quando o componente é montado
    fetchOrders();

    // Recarregar pedidos a cada 5 minutos
    const intervalId = setInterval(fetchOrders, 5 * 60 * 1000); // 5 minutos em milissegundos

    // Limpar o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  async function fetchOrders() {
    const response = await api.get("/order/getAllOrders");
    console.log(response);
    const sortedOrders = response.data.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
    setOrders(sortedOrders);
  }

  const handleSectionSelected = (section) => {
    setActiveSection(section);
  };

  async function handleOrderStatus(order, event) {
    let statusSelected = event.target.value;
    let confirmMessage = '';
    let successMessage = '';

    if (statusSelected === "🔴 Cancelado") {
      confirmMessage = "Tem certeza de que deseja cancelar este pedido?";
      successMessage = "O pedido foi cancelado com sucesso.";
    } else if (statusSelected === "🟢 Entregue") {
      confirmMessage = "Tem certeza de que deseja marcar este pedido como entregue?";
      successMessage = "O pedido foi marcado como entregue com sucesso.";
    }

    if (confirmMessage) {
      const confirmChange = window.confirm(confirmMessage);
      if (!confirmChange) {
        return; // Se o usuário clicar em "Não", não faça nada
      }
    }

    const cart = {
      status: statusSelected,
    };

    await api.put(`/order/updateOrderStatus/${order.id}`, cart);

    if (successMessage) {
      alert(successMessage); // Mostrar a mensagem de sucesso
      order.status = statusSelected; // Atualize o status do pedido localmente
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
              <Product key={String(product.id)} data={product} onDelete={handleDeleteProduct} />
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
                        disabled={order.status === "🔴 Cancelado" || order.status === "🟢 Entregue"}
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
