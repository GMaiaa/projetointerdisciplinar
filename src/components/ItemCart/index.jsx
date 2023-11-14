import { useState } from "react";
import { api } from "../../services/api";
import { Container, Title } from "./styles";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function ItemCart({ data, ...rest }) {
  const [quantity, setQuantity] = useState(data.quantity);
  const [subtotal, setSubtotal] = useState(data.subTotalValue);
  const navigate = useNavigate();


  
  function HandleDeleteItem() {
    const confirm = window.confirm(
      `Deseja realmente remover o produto ${data.productName} do carrinho?`
    );
    console.log(data.id);

    if (confirm) {
      api
        .delete(`cart/${data.id}`)
        .then((response) => {
          alert(`Item ${data.productName} foi deletado`);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function handleUpdateQuantity(newQuantity) {
    api
      .put(`/cart/${data.id}`, {
        quantity: newQuantity,
      })
      .then((response) => {
        data.quantity = newQuantity;
        setQuantity(newQuantity);
        // Atualiza o subtotal localmente sem recarregar a página
        setSubtotal(data.productValue * newQuantity);
        
        window.location.reload();
        
      })
      .catch((error) => {
        console.error("Erro ao atualizar quantidade:", error);
      });
  }

  return (
    <Container>
      <img src={data.productImage} />
      <Title>
        <input
          type="number"
          value={quantity}
          onChange={(e) => handleUpdateQuantity(e.target.value)}
        />
        <h1>{data.productName}</h1>
      </Title>
      <p>
        {subtotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
        })}
      </p>
      <button onClick={HandleDeleteItem}>
        {" "}
        <MdOutlineRemoveShoppingCart />
      </button>
    </Container>
  );
}