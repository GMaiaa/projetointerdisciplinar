import { RiShutDownLine } from "react-icons/ri";
import { Container, Logo, Options, Navigation } from "./styles";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import  LogoImg from "../../assets/logo.png"

export function Header() {
  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="Logo da Frutilamix" />
      </Logo>
      <Navigation>
    <ul>
      <li> Frutas </li>
      <li> Verduras </li>
      <li> Legumes </li>
      <li> Bebidas </li>
      <li> Não Alimentar </li>
    </ul>

      </Navigation>

      <Options>
        <button>
          <CgProfile />
        </button>
        <button>
          <AiOutlineShoppingCart />
        </button>
      </Options>
    </Container>
  );
}
