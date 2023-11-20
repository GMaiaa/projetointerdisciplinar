
import React, { useEffect, useState,useContext } from 'react';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Content, Description, Title, Info, Container, More } from "./styles";
import { Card } from "../../components/Card";
import { Items } from "../../pages/Home/styles";
import { Item } from "../../components/Item"
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";


export function Details() {
  const { isClicked, setIsClicked } = useContext(CartContext);
  const [data, setData] = useState(null);
  const [additionalProducts, setAdditionalProducts] = useState([]);
  const params = useParams();

  const navigate = useNavigate();

  function backHome() {
    navigate("/");
  }
  useEffect(() => {
    if (isClicked) {
    setTimeout(() => {
     setIsClicked(false);
    }, 1500);
    }
   }, [isClicked]);

  function HandleAddItem(id) {

    console.log(`Adicionando produto ${id} ao carrinho`);
    setIsClicked(true);
    api.get(`/cart/addCart/${id}`, {
      data: { id: id }
    });
    window.alert("Produto adicionado ao carrinho! finalize seu pedido clicando no ícone do carrinho.")
  }


  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/product/${params.id}`);
      setData(response.data);
    }

    fetchProduct();
  }, []);

  useEffect(() => {
    if (data) {
      async function fetchAdditionalProducts() {
        try {
          const response = await api.get(`/product/relatedProducts/${data.category}`, {
            params: { category: data.category }
          });
          const filteredProducts = response.data.filter(product => product.id !== data.id);
          setAdditionalProducts(filteredProducts);
        } catch (error) {
          console.error("Erro ao buscar produtos adicionais:", error);
        }
      }
      fetchAdditionalProducts();
    }
  }, [data]);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <ButtonText title="Voltar" onClick={backHome} style={{ fontSize: '20px', marginLeft: '130px' }} />
          <Content>
            <img src={data.image} />
            <Info>
              <span>{data.name}</span>
              <p>{data.value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              })}</p>
              <button onClick={() => HandleAddItem(params.id)}>Adicionar ao carrinho</button>
              <p>Descrição:</p><Description>{data.description}</Description>
            </Info>
          </Content>
        </main>
      )}
      <More>
        <Title>Veja também:</Title>
        <Items>
          {additionalProducts.slice(0, 5).map((product) => (
            <Item
              key={product.id}
              name={product.name}
              value={product.value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              })}
              urlImage={product.image}
              onOrderClick={() => HandleAddItem(product.id)}
            />
          ))}
        </Items>
        <Footer />
      </More>
    </Container>
  );
}
