import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";
import { Textarea } from "../../components/Textarea";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api"; // Importa o serviço API

export function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productData, setProductData] = useState({
    name: "",
    value: "",
    image: "",
    amount: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const response = await api.get(`product/${id}`);
        setProductData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleUpdateProduct = async () => {
    try {
      if (id === "new") {
        await api.post("product", productData);
      } else {
        await api.put(`product/${id}`, productData);
      }
      alert(`Item ${productData.name} foi atualizado`);
      navigate("/adminPanel");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const productClone = { ...productData };
    productClone[e.target.name] = e.target.value;
    setProductData(productClone);
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
