import { Container, Logo, Menu, Search, Content, NewItem, Table } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiSearch, FiPlus } from "react-icons/fi";
import { Section } from "../../components/Section";
import { Product } from "../../components/Product";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


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

    const cart = {
      status: statusSelected,
    };

    await api.put(`/order/updateOrderStatus/${order.id}`, cart);
    location.reload();
  }

  function formatDate(date) {
    const dateFormatted = new Date(date);

    let monthFormatted = (dateFormatted.getMonth() + 1).toString();
    monthFormatted = monthFormatted.length == 1 ? `0${monthFormatted}` : monthFormatted;

    let minutesFormatted = dateFormatted.getMinutes().toString();
    minutesFormatted = minutesFormatted.length == 1 ? `0${minutesFormatted}` : minutesFormatted;

    return `${dateFormatted.getDate()}/${monthFormatted} às ${
        dateFormatted.getHours() - 3 }h${minutesFormatted}`;
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
            title="Todos"
            onClick={() => handleSectionSelected("Estoque")} // Show Estoque section
            isActive={activeSection === "Estoque"}
          />
        </li>
        <li>
          <ButtonText
            title="Pedidos"
            onClick={() => handleSectionSelected("Pedidos")} // Show Clientes section
            isActive={activeSection === "Pedidos"}
          />
        </li>
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
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
              <tbody className="order">
                {orders &&
                  orders.map((order) => (
                    <tr key={String(order.id)}>
                      <td>
                        <select
                          defaultValue={order.status}
                          onChange={(event) => handleOrderStatus(order, event)}
                        >
                          <option value="🟡 Pendente">🟡 Pendente</option>
                          <option value="🟠 Preparando">🟠 Preparando</option>
                          <option value="🟢 Entregue">🟢 Entregue</option>
                          <option value="🔴 Cancelado">🔴 Cancelado</option>
                        </select>
                      </td>
                      <td>0000{order.id}</td>
                      <td>
                        {order.items.map((item) => (
                          <span key={item.productName}>
                            {item.quantity} x {item.productName} ,{" "}
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
