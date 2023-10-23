import { Container, Options, Body } from "./styles";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

export function Product({ data, ...rest }) {
  return (
    <Container {...rest}>
      <Body>
        <h1> {data.name} </h1>
        <Options>
          <button>
            <MdModeEditOutline />
          </button>
          <button>
            <MdDelete />
          </button>
        </Options>
      </Body>

      <footer>
        <p> Quantidade em estoque: {data.amount}</p>
      </footer>
    </Container>
  );
}
