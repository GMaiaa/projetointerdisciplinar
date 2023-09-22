import { RiShutDownLine } from "react-icons/ri";
import { Container, Logo, Options } from "./styles";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import  LogoImg from "../../assets/logo.png"

export function Header() {
  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="Logo da Frutilamix" />
      </Logo>

      <Options>
        <button>
          <CgProfile />
        </button>
        <button>
          <BsCart4 />
        </button>
      </Options>
    </Container>
  );
}
