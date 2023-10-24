import { Container, Logo, Menu, Search, Content, NewItem} from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiSearch, FiPlus } from "react-icons/fi"
import { Section } from "../../components/Section";
import { Product } from "../../components/Product";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function AdminPanel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get("/product");
      setProducts(response.data);
    }

    fetchProducts();
  }, []);

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
            onClick={() => handleTagSelected("all")}
            isActive
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

      <Section title="Estoque">
          {products.map((product) => (
            <Product
              key={String(product.id)}
              data={product}
            />
          ))}
        </Section>
      </Content>

      
      <NewItem to="/new">
        <FiPlus />
        Adicionar novo produto
      </NewItem>
    </Container>
  );
}
