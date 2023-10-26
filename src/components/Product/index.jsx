import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Options, Body, Update } from "./styles";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export function Product({ data, ...rest }) {
  function HandleDeleteProduct() {
    api.delete(`product/${data.id}`)
      .then((response) => {
        alert(`Item ${data.name} foi deletado`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Container {...rest}>
      <Body>
        <h1>{data.name}</h1>
        <Options>
          <Update to="/update">
            <MdModeEditOutline />
          </Update>
          <button onClick={HandleDeleteProduct}>
            <MdDelete />
          </button>
        </Options>
      </Body>

      <footer>
        <p>Quantidade em estoque: {data.amount}</p>
      </footer>
    </Container>
  );
}
