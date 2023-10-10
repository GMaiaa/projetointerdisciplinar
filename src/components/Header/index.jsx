import { RiShutDownLine } from "react-icons/ri";
import { BiSolidUserPin,BiLogoWhatsappSquare } from "react-icons/bi";
import { Container, Logo, Options, Navigation, Modal, ModalContent,SecondModalContent, Overlay,StyledButton} from "./styles";
import { StyledCgProfile } from './styles.js';
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
  const [SecondModal, setSecondModal] = useState(false)
  const toggleSecondModal = () => {
    setSecondModal(!SecondModal);
  };
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
       {/*  <StyledCgProfile /> */}
        <button onClick={toggleModal}>
          <p>Acesse sua conta</p><br/>
        </button>
        <p>Ou</p>
        <button onClick={toggleSecondModal}>
         <p>Crie uma conta</p>
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
      {SecondModal && (
        <Modal>
        <Overlay/>        
        <SecondModalContent>
          <h3>Crie sua conta aqui!</h3> <br/>
          <form>
          <Input placeholder="Nome completo" type="text" icon={BiSolidUserPin}/>
          <Input placeholder="Celular" type="text" icon={BiLogoWhatsappSquare}/>
          <Input placeholder="E-mail" type="text" icon={FiMail}/>
          <Input placeholder="Senha" type="password" icon={FiLock}/>
          <Input placeholder="Confirme sua Senha" type="password" icon={FiLock}/>
          
          <Checkbox label="Lembrar dados" />
          <StyledButton>Cadastra-se</StyledButton>
          </form>
          <button onClick={toggleSecondModal}>
            <AiOutlineClose/>
          </button>
        </SecondModalContent>
      </Modal>
      )}
      
    </Container>
  );
}
