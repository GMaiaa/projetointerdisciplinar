
import React, { useEffect, useState } from 'react';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {Content, Description,Title, Info, Container, More} from "./styles";
import {Card} from "../../components/Card";
import {Items} from "../../pages/Home/styles";
import {Item} from "../../components/Item"
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();

  function HandleAddItem(){
    api.get(`/cart/addCart/${params.id}`);
    alert("Pedido adicionado ao carrinho!")
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/product/${params.id}`);
      setData(response.data);
    }

    fetchProduct();
  }, []);

    return (
      <Container>
      <Header />

      {data && (
        <main>
         <Content>
          <img src={data.image} />
          <Info>
            <span>{data.name}</span>
            <p>{data.value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        })}</p>
            <button onClick={HandleAddItem}>Adicionar ao carrinho</button>
            <p>Descrição:</p><Description>{data.description}</Description>
          </Info>
        </Content>
        </main>
        )}
       <More>
          <Title>Veja também:</Title>
          <Items>
            <Item
              name="Alface"
              value="R$ 8,00"
              urlImage="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/0/100036---2000230000007---alface-crespa.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover"
            />
            <Item
              name="Cebolinha"
              value="R$ 7,00"
              urlImage="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/0/100110---2001100000004---cebolinha.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover"
            />
            <Item
              name="Brócolis"
              value="R$ 8,50"
              urlImage="https://www.galaxcommerce.com.br/sistema/upload/1994/produtos/brocolis-ninja_2020-04-14_17-02-21_0.jpg"
            />
            <Item
              name="Alho Poró  "
              value="R$ 8,00"
              urlImage="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/0/100048---2000350000000---alho-poro.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover"
            />
            <Item
              name="Espinafre"
              value="R$ 7,00"
              urlImage="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/0/100128---2116220000008---espinafre.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover"
            />
          </Items>
        <Footer />
        </More>
    </Container>
  );
}