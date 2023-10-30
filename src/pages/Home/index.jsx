import { Container, AboutContent, Section, Items } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Undraw from "../../assets/undraw.svg";
import { Card } from "../../components/Card";
import { ButtonText } from "../../components/ButtonText";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [fruits, setFruits] = useState([]);
  const [greenerys, setGreenerys] = useState([]);
  const [vegetables, setVegetables] = useState([])
  
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchFilteredFruits() {
      try {
        const response = await api.get("/product", {
        
        });
       const filteredFruits = response.data.filter((i) => i.category == "Fruta").slice(0, 5)
        setFruits(filteredFruits);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchFilteredFruits();
  }, []);

  useEffect(() => {
    async function fetchFilteredGreenerys() {
      try {
        const response = await api.get("/product", {
        
        });
       const filteredGreenerys = response.data.filter((i) => i.category == "Verdura").slice(0, 5)
        setGreenerys(filteredGreenerys);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchFilteredGreenerys();
  }, []);

  useEffect(() => {
    async function fetchFilteredVegetables() {
      try {
        const response = await api.get("/product", {
        
        });
       const filteredVegetables = response.data.filter((i) => i.category == "Legume").slice(0, 5)
        setVegetables(filteredVegetables);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchFilteredVegetables();
  }, []);
  return (
    <Container>
      <Header />
      <AboutContent>
        <div>
          <h2>
            {" "}
            Realize a sua <span> encomenda </span> para
            <span> Retirada </span> ou <span> entrega </span>
          </h2>
          <p>
            Qualidade é a nossa prioridade. Com cuidado e dedicação,
            selecionamos os melhores produtos frescos e sazonais para você e sua
            família.
          </p>
        </div>
        <img
          src={Undraw}
          alt="Ilustração de um homem com um carrinho de compras"
        />
      </AboutContent>

      <Section>
        <h1>Frutas</h1>
        <ButtonText title="Ver mais" />
        <Items>
        {fruits.map((fruit, key) => (
              <Card
                key={String(fruit.id)}
                product = {fruit}
                onClick={() => handleDetails(fruit.id)}
              />
            ))}
        </Items>
      </Section>

      <Section>
        <h1>Verduras</h1>
        <ButtonText title="Ver mais" />
        <Items>
        {greenerys.map((greenery) => (
              <Card
                key={String(greenery.id)}
                product = {greenery}
              />
            ))}
        </Items>
      </Section>

      <Section>
        <h1>Legumes</h1>
        <ButtonText title="Ver mais" />
        <Items>
        {vegetables.map((vegetable) => (
              <Card
                key={String(vegetable.id)}
                product = {vegetable}
              />
            ))}
        </Items>
      </Section>

      <Section>
        <h1>Bebidas</h1>
        <ButtonText title="Ver mais" />
        <Items>
          <Card
            name="Água Mineral"
            value="R$ 2,00"
            image="https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/a/g/agua-mineral-crystal-500ml-7894900530001.jpg"
          />
          <Card
            name="Água c/ Gás"
            value="R$ 2,50"
            image="https://www.imigrantesbebidas.com.br/bebida/images/products/full/2894-agua-mineral-crystal-com-gas-500ml.jpg"
          />
          <Card
            name="Suco de Uva"
            value="R$ 6,50"
            image="https://18666.cdn.simplo7.net/static/18666/sku/suco-de-uva-tinto-suco-de-uva-aurora-tinto-integral-1-5lts-c-6--p-1624989709204.jpg"
          />
          <Card
            name="Chá Matte"
            value="R$ 5,00"
            image="https://res.cloudinary.com/piramides/image/upload/c_fill,h_564,w_395/v1/products/10243-cha-matte-leao-limao-pet-450ml-6un.20230925125505.png?_a=AAAOGGX"
          />
          <Card
            name="Yakult"
            value="R$ 3,00"
            image="https://emporiokaminski.com.br/wp-content/uploads/2020/06/yakult-80g.png"
          />
        </Items>
        
      </Section>

      <Section>
        <h1>Não Alimentar</h1>
        <ButtonText title="Ver mais" />
        <Items>
          <Card
            name=""
            value="R$ 2,00"
            image="https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/a/g/agua-mineral-crystal-500ml-7894900530001.jpg"
          />
          <Card
            name="Água c/ Gás"
            value="R$ 2,50"
            image="https://www.imigrantesbebidas.com.br/bebida/images/products/full/2894-agua-mineral-crystal-com-gas-500ml.jpg"
          />
          <Card
            name="Suco de Uva"
            value="R$ 6,50"
            image="https://18666.cdn.simplo7.net/static/18666/sku/suco-de-uva-tinto-suco-de-uva-aurora-tinto-integral-1-5lts-c-6--p-1624989709204.jpg"
          />
          <Card
            name="Chá Matte"
            value="R$ 5,00"
            image="https://res.cloudinary.com/piramides/image/upload/c_fill,h_564,w_395/v1/products/10243-cha-matte-leao-limao-pet-450ml-6un.20230925125505.png?_a=AAAOGGX"
          />
          <Card
            name="Yakult"
            value="R$ 3,00"
            image="https://conteudo.imguol.com.br/c/noticias/58/2023/07/05/yakult-1688566224560_v2_3x4.jpg"
          />
        </Items>
      </Section>
      <Footer />
    </Container>
  );
}
