import { useNavigate } from "react-router-dom";
import { ButtonText } from "../ButtonText";
import { Container, Content } from "./styles";

export function InformativePage({ title, text, image, alt}) {
    function handleBack(){
        useNavigate(-1)
    }

  return (
    <Container> 
    <Content>
    <ButtonText onClick={handleBack} title="Voltar"/>
      <h1>{title}</h1>
      <p>{text}</p>
      </Content>
      <img src={image} alt={`Imagem Ilustrativa de ${alt}`} />
    </Container>
  );
}
