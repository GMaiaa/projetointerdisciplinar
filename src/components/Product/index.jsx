import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Options, Body } from "./styles";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export function Product({ data, ...rest }) {
  const navigate = useNavigate();

  function HandleDeleteProduct() {
    const confirm = window.confirm("Deseja realmente remover a nota?")
    

    if(confirm){
    api.delete(`product/${data.id}`)
      .then((response) => {
        alert(`Item ${data.name} foi deletado`);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  function handleDetails(id) {
    navigate(`/details/${data.id}`);
  }

  function handleUpdate(id) {
    navigate(`/update/${data.id}`);
  }

  return (
    <Container {...rest}>
      <Body>
        <h1 onClick={handleDetails}>{data.name}</h1>
        <Options>
          <button onClick={handleUpdate}>
            <MdModeEditOutline />
          </button>
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
