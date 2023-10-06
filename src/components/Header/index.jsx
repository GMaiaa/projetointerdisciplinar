import { RiShutDownLine } from "react-icons/ri";
import { Container, Logo, Options, Navigation, Modal, ModalContent, Overlay,StyledCheckbox,CheckboxLabel,StyledButton} from "./styles";
import { CgProfile } from "react-icons/cg";
import { FiMail, FiLock } from "react-icons/fi"
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import  LogoImg from "../../assets/logo.png"
import { useState } from "react";
import { Input } from "../Input";
import Checkbox from "../Checkbox";


export function Header() {
  const [modal, setModal] = useState(false)

  const toggleModal = () =>{
    setModal(!modal)
  }

  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="Logo da Quitanda Frescor" />
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
        <button onClick={toggleModal}>
          <CgProfile />
        </button>
        <button  >
          <AiOutlineShoppingCart/>
        </button>
      </Options>

      {modal && (
        <Modal>
        <Overlay/>        
        <ModalContent>
          <h3>Olá, bem-vindo <br
          /> a <span>Quitanda frescor!</span></h3>
          <form>
          <Input placeholder="E-mail" type="text" icon={FiMail}/>
          <Input placeholder="Senha" type="password" icon={FiLock}/>
          <Checkbox label="Lembrar dados" />
          <StyledButton>Entrar</StyledButton>
          </form>
          <button onClick={toggleModal}>
            <AiOutlineClose/>
          </button>
        </ModalContent>
      </Modal>
      )}
      
    </Container>
  );
}
