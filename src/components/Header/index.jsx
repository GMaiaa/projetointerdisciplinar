import { Container, Logo, Options, Navigation, OptionButton } from "./styles";
import { BiSupport } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LogoImg from "../../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";



export function Header() {
  return (
    <Container>
      <Logo>
        <a href="../"> <img src={LogoImg} alt="Logo da Quitanda Frescor" /> </a>
      </Logo>
      <Navigation>
        <ul>
          <Link to="IDfruta" smooth={true} duration={500}> <li> Frutas </li> </Link>
          <Link to="IDVerdura" smooth={true} duration={500}><li> Verduras </li> </Link>
          <Link to="IDLegume" smooth={true} duration={500}><li> Legumes </li> </Link>
          <Link to="IDBebida" smooth={true} duration={500}><li> Bebidas </li> </Link>
          <Link to="IDseila" smooth={true} duration={500}><li> Não Alimentar </li> </Link>
        </ul>
      </Navigation>

      <Options>
        <OptionButton to="/cart">
          <AiOutlineShoppingCart />
        </OptionButton>
        <OptionButton to="/support">
          <BiSupport />
        </OptionButton>
      </Options>
    </Container>

  );
}