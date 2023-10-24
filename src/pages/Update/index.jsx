import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";
import { Textarea } from "../../components/Textarea";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";
import { Link, useParams } from "react-router-dom";

export function Update() {
  const { id } = useParams();
  const [productData, setProductData] = useState({
    name: "",
    value: "",
    description: "",
    image: "",
    amount: "",
    category: ""
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/product/${id}`);
        setProductData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  async function handleUpdateProduct() {
    try {
      await api.put(`/product/${id}`, productData);
      alert("Produto atualizado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar o produto.");
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Editar Produto</h1>
            <Link to="/adminpanel">
              <ButtonText title="Voltar" />
            </Link>
          </header>

          <Input
            name="name"
            placeholder="Nome do produto"
            value={productData.name}
            onChange={handleInputChange}
          />
          <Input
            name="value"
            placeholder="R$ 00,00"
            value={productData.value}
            onChange={handleInputChange}
          />
          <Input
            name="image"
            placeholder="Imagem URL"
            value={productData.image}
            onChange={handleInputChange}
          />
          <Input
            name="amount"
            placeholder="Quantidade em estoque"
            value={productData.amount}
            onChange={handleInputChange}
          />
          <Input
            name="category"
            placeholder="Categoria"
            value={productData.category}
            onChange={handleInputChange}
          />
          <Textarea
            name="description"
            placeholder="Descrição"
            value={productData.description}
            onChange={handleInputChange}
          />
          <Button title="Salvar" onClick={handleUpdateProduct} />
        </Form>
      </main>
    </Container>
  );
}