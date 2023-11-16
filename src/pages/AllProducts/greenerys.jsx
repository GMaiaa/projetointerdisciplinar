
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


export function Greenerys() {
    const navigate = useNavigate();
    function handleDetails(id) {
        navigate(`/details/${id}`);
      }
const [greenerys, setGreenerys] = useState([]);
  const params = useParams();


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
  return (
    <Container>
    <Header />
    <TitleContainer>
        <Title>Todas as verduras</Title>
        <ImageStyle src={vegetal} alt="Logo da Quitanda Frescor" />
    </TitleContainer>
      <CardContainer>
      {greenerys.map((greenery) => (
              <Card
                key={String(greenery.id)}
                product = {greenery}
                onCardClick={() => handleDetails(greenery.id)}
              />
            ))}
      </CardContainer>
      <Footer />
    </Container>
  );
}
