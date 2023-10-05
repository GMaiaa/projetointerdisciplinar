import { Container } from "./styles";
import { BiLogoWhatsappSquare } from "react-icons/bi";

export function Footer() {
  return (
    <Container>
      <p>&#169; Quitanda Frescor 2023</p>
      <div></div>
      <p>Construído por estudantes da Fatec Zona Leste</p>
      <p>Contacte-nos:</p>
      <BiLogoWhatsappSquare />
    </Container>
  );
}
