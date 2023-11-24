
import React, { useEffect, useState } from 'react';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Title, Container, CardContainer, ImageStyle, TitleContainer } from "./styles";
import { Card } from "../../components/Card";
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import nonfood from "../../assets/nonfood.png";
import { useNavigate } from "react-router-dom";


export function NonFood() {
  const navigate = useNavigate();
  function handleDetails(id) {
    navigate(`/details/${id}`);
  }
  const [nonFoods, setNonFoods] = useState([])
  const params = useParams();


  useEffect(() => {
    async function fetchFilteredNonFoods() {
      try {
        const response = await api.get("/product");
        const filteredNonFoods = response.data.filter((i) => i.category == "Não alimentar");
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
      <TitleContainer>
        <Title>Não alimentares</Title>
        <ImageStyle src={nonfood} alt="Logo da Quitanda Frescor" />
      </TitleContainer>
      <CardContainer>
        {nonFoods.map((nonFood) => (
          <Card
            key={String(nonFood.id)}
            product={nonFood}
            onCardClick={() => handleDetails(nonFood.id)}
          />
        ))}
      </CardContainer>
      <Footer />
    </Container>
  );
}
