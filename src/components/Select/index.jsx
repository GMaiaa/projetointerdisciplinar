import React from "react";
import { Container } from "./styles";

export function Select(props) {
  const { onChange } = props;

  return (
    <Container onChange={onChange}>
      <option value="none">Categoria</option>
      <option value="Fruta">Fruta</option>
      <option value="Verdura">Verdura</option>
      <option value="Legume">Legume</option>
      <option value="Bebida">Bebida</option>
      <option value="Não alimentar">Não alimentar</option>
    </Container>
  );
}