import React, { useState } from "react";
import { Header } from "../../components/Header";

import { Input } from "../../components/Input";

import { Button } from "../../components/Button";
import { Container, Form } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { InputCheckbox } from "../../components/InputCheckbox";

export function New() {
  const [descricao, setDescricao] = useState("");
  const [nome, setnome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [custo, setCusto] = useState("");
  const [quantidadeNoEstoque, setQuantidadeNoEstoque] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleCadastroProduto = async () => {
    const produto = {
      descricao,
      categoria,
      custo: parseFloat(custo),
      quantidadeNoEstoque: parseInt(quantidadeNoEstoque, 10)
    };
    try {
      const resposta = await fetch("http://localhost:8080/api/v1/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
      });
      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar o produto.");
      }
      setMensagem("Produto cadastrado com sucesso!");
    } catch (error) {
      setMensagem("Erro ao cadastrar o produto. Verifique os dados informados.");
    }
  };

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Novo Produto</h1>
            <ButtonText title="Voltar" />
          </header>

  
          <Input
            placeholder="Nome do produto"
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setnome(e.target.value)}
          />
          <Input
            placeholder="Descrição"
            id="descricao"
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <Input
            placeholder="Categoria"
            id="categoria"
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />

          <Input
            placeholder="Custo"
            id="custo"
            type="number"
            value={custo}
            onChange={(e) => setCusto(e.target.value)}
          />
        
          <Input
            placeholder="Quantidade no estoque"
            id="quantidade"
            type="number"
            value={quantidadeNoEstoque}
            onChange={(e) => setQuantidadeNoEstoque(e.target.value)}
          />

          <Button title="Salvar" onClick={handleCadastroProduto} />
        </Form>
        {mensagem && <div>{mensagem}</div>} 
      </main>
    </Container>
  );
}

