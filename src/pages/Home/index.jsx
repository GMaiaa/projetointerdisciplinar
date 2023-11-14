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
  const [drinks, setDrinks] = useState([])
  const [nonFoods, setNonFoods] = useState([])
  
  
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

  useEffect(() => {
    async function fetchFilteredDrinks() {
      try {
        const response = await api.get("/product", {
        
        });
       const filteredDrinks = response.data.filter((i) => i.category == "Bebida").slice(0, 5)
        setDrinks(filteredDrinks);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchFilteredDrinks();
  }, []);

  useEffect(() => {
    async function fetchFilteredNonFoods() {
      try {
        const response = await api.get("/product", {
        
        });
       const filteredNonFoods = response.data.filter((i) => i.category == "Não alimentar").slice(0, 5)
        setNonFoods(filteredNonFoods);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchFilteredNonFoods();
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
      <h1 id="IDfruta">Frutas</h1>
        <ButtonText title="Ver mais" />
        <Items>
        {fruits.map((fruit, key) => (
              <Card
                key={String(fruit.id)}
                product = {fruit}
                onCardClick={() => handleDetails(fruit.id)}
              />
            ))}
        </Items>
      </Section>

      <Section>
        <h1 id="IDVerdura">Verduras</h1>
        <ButtonText title="Ver mais" />
        <Items>
        {greenerys.map((greenery) => (
              <Card
                key={String(greenery.id)}
                product = {greenery}
                onCardClick={() => handleDetails(greenery.id)}
              />
            ))}
        </Items>
      </Section>

      <Section>
        <h1 id="IDLegume">Legumes</h1>
        <ButtonText title="Ver mais" />
        <Items>
        {vegetables.map((vegetable) => (
              <Card
                key={String(vegetable.id)}
                product = {vegetable}
                onCardClick={() => handleDetails(vegetable.id)}
              />
            ))}
        </Items>
      </Section>

      <Section>
        <h1 id="IDBebida">Bebidas</h1>
        <ButtonText title="Ver mais" />
        <Items>
        {drinks.map((drink) => (
              <Card
                key={String(drink.id)}
                product = {drink}
                onCardClick={() => handleDetails(drink.id)}
              />
            ))}
        </Items>
        
      </Section>

      <Section>
        <h1 id="IDseila">Não Alimentar</h1>
        <ButtonText title="Ver mais" />
        <Items>
        {nonFoods.map((nonFood) => (
              <Card
                key={String(nonFood.id)}
                product = {nonFood}
                onCardClick={() => handleDetails(nonFood.id)}
              />
            ))}
        </Items>
      </Section>
      <Footer />
    </Container>
  );
}
