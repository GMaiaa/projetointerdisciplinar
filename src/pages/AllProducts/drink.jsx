
import React, { useEffect, useState } from 'react';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {Content, Description,Title, Info, Container, More,CardContainer,ImageStyle,TitleContainer} from "./styles";
import {Card} from "../../components/Card";
import {Items} from "../../pages/Home/styles";
import {Item} from "../../components/Item"
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { CiApple } from 'react-icons/ci';
import drink from "../../assets/drink.png";
import { useNavigate } from "react-router-dom";


export function Drink() {
    const navigate = useNavigate();
    function handleDetails(id) {
        navigate(`/details/${id}`);
      }
      const [drinks, setDrinks] = useState([])
  const params = useParams();


  useEffect(() => {
    async function fetchFilteredFruits() {
      try {
        const response = await api.get("/product");
        const filteredFruits = response.data.filter((i) => i.category == "Fruta");
        setFruits(filteredFruits);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchFilteredFruits();
  }, []);

  return (
    <Container>
    <Header />
    <TitleContainer>
        <Title>Todas as bebidas</Title>
        <ImageStyle src={drink} alt="Logo da Quitanda Frescor" />
    </TitleContainer>
      <CardContainer>
      {drinks.map((drink) => (
              <Card
                key={String(drink.id)}
                product = {drink}
                onCardClick={() => handleDetails(drink.id)}
              />
            ))}
      </CardContainer>
      <Footer />
    </Container>
  );
}
