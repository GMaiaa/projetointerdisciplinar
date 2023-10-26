import { Container, Logo, Menu, Search, Content, NewItem } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiSearch, FiPlus } from "react-icons/fi";
import { Section } from "../../components/Section";
import { Product } from "../../components/Product";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../components/User";

export function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeSection, setActiveSection] = useState("Estoque"); // Track the active section

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
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  // Function to handle section selection
  const handleSectionSelected = (section) => {
    setActiveSection(section);
  };

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
            title="Clientes"
            onClick={() => handleSectionSelected("Clientes")} // Show Clientes section
            isActive={activeSection === "Clientes"}
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
              <Product
                key={String(product.id)}
                data={product}
                // Pass the product ID to the handleUpdateProduct function
                updateProduct={() => handleUpdateProduct(product.id)}
              />
            ))}
          </Section>
        )}
        {activeSection === "Clientes" && (
          <Section title="Clientes">
            {users.map((user) => (
              <User key={String(user.id)} data={user} /> // Use the User component
            ))}
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
