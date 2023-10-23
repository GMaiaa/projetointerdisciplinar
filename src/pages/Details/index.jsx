
import React, { useState } from 'react';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button, Image, Container, Content, P, Span, Description,Title } from "./styles";
import {Card} from "../../components/Card";
import {Items} from "../../pages/Home/styles";
import {Item} from "../../components/Item"

export function Details() {

    const product = {
        Item: {
          name: "Maçã",
          value: "R$ 2,00",
          urlImage: "https://scfoods.fbitsstatic.net/img/p/maca-red-argentina-unidade-70942/257561.jpg?w=800&h=800&v=no-change&qs=ignore",
          descricao:"Apresentamos a você nossa maçã premium, cuidadosamente selecionada para garantir a mais alta qualidade. Esta maçã é conhecida por sua cor vermelha brilhante e pele lisa, um verdadeiro deleite para os olhos."
        }
    };

    return (
      <div>
        <Header />
        <Container>
          <Image src={product.Item.urlImage} /> 
          <Content>
            <Span>{product.Item.name}</Span><p></p>
            <P>{product.Item.value}</P> 
            <Button>Adicionar ao carrinho</Button>
            <P>Descrição:</P><Description>{product.Item.descricao}</Description>
          </Content>
        </Container>
        <Container>
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
        </Container>
        <Footer />
      </div>
    );    

}
