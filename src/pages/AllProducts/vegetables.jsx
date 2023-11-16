
import React, { useEffect, useState } from 'react';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {Content, Description,Title, Info, Container, More,CardContainer,ImageStyle,TitleContainer} from "./styles";
import {Card} from "../../components/Card";
import {Items} from "../Home/styles";
import {Item} from "../../components/Item"
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { CiApple } from 'react-icons/ci';
import vegetal from "../../assets/vegetal.png";
import { useNavigate } from "react-router-dom";


export function Vegetables() {
    const navigate = useNavigate();
    function handleDetails(id) {
        navigate(`/details/${id}`);
      }
  const [vegetables, setVegetables] = useState([]);
  const params = useParams();


  useEffect(() => {
    async function fetchFilteredVegetables() {
      try {
        const response = await api.get("/product", {
        
        });
       const filteredVegetables = response.data.filter((i) => i.category == "Legume")
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
    <div style={TitleContainer}>
        <Title>Todas os Legumes</Title>
        <img src={vegetal} alt="Logo da Quitanda Frescor" style={ImageStyle}/>
    </div>
      <CardContainer>
      {vegetables.map((vegetable) => (
              <Card
                key={String(vegetable.id)}
                product = {vegetable}
                onCardClick={() => handleDetails(vegetable.id)}
              />
            ))}
      </CardContainer>
      <Footer />
    </Container>
  );
}
