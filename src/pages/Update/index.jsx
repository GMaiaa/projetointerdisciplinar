import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";
import { Textarea } from "../../components/Textarea";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api"; // Importa o serviço API
import { Select } from "../../components/Select";

export function Update() {
  const { id } = useParams();
  const navigate = useNavigate()

  function backPanel(){
    navigate("/adminpanel")
  }
  const [productData, setProductData] = useState({
    name: "",
    value: "",
    image: "",
    amount: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await api.get(`/product/${id}`);
        const product = response.data;
        setProductData(product);
      } catch (error) {
        console.error("Erro ao buscar dados do produto:", error);
      }
    }
    fetchProductData();
  }, []);

  const handleUpdateProduct = async () => {
    const updatedProduct = {
      name: productData.name,
      value: parseFloat(productData.value.replace(",", ".")),
      image: productData.image,
      amount: productData.amount,
      category: productData.category,
      description: productData.description,
    };

    await api.put(`/product/${id}`, updatedProduct);

    alert("Produto Atualizado com sucesso!");
    backPanel()
  };

  const formatValueWithComma = (value) => {
    if (typeof value === "number") {
      value = value.toString();
    }
    return value.replace(".", ",");
  };

  
  console.log("productData.description:", productData.description);
  console.log("productData.category:", productData.category);

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
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
          />
          <Input
            name="value"
            placeholder="R$ 00,00"
            value={formatValueWithComma(productData.value)}
            onChange={(e) =>
              // Converte a vírgula de volta para ponto no estado
              setProductData({
                ...productData,
                value: e.target.value.replace(",", "."),
              })
            }
          />
          <Input
            name="image"
            placeholder="Imagem URL"
            value={productData.image}
            onChange={(e) =>
              setProductData({ ...productData, image: e.target.value })
            }
          />
          <Input
            name="amount"
            placeholder="Quantidade em estoque"
            value={productData.amount}
            onChange={(e) =>
              setProductData({ ...productData, amount: e.target.value })
            }
          />
          <Select
            category={productData.category}
            onChange={(e) => {
              setProductData({ ...productData, category: e.target.value });
            }}
          />
          <Input
            name="description"
            placeholder="Descrição"
            value={productData.description}
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
          />
          <Button title="Salvar" onClick={handleUpdateProduct} />
        </Form>
      </main>
    </Container>
  );
}
