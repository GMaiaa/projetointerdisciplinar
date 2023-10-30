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
import { api } from "../../services/api";




export function Header() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modal, setModal] = useState(false)

 function handleSaveUser(){
    if(password !== confirmPassword) {
      alert("As senhas não correspondem!");
      return;
    }
  
     api.post("/user" ,{
      name,
      phone,
      email,
      password
    });
  
    alert("Cliente cadastrado com sucesso!");
  }
  

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
          <p>Acesse sua conta</p>
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
        <Input placeholder="Nome completo" type="text" icon={BiSolidUserPin} onChange={e => setName(e.target.value)}/>
        <Input placeholder="Celular" type="text" icon={BiLogoWhatsappSquare} onChange={e => setPhone(e.target.value)}/>
        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
        <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>
        <Input placeholder="Confirme sua Senha" type="password" icon={FiLock} onChange={e => setConfirmPassword(e.target.value)}/>
        
        <Checkbox label="Lembrar dados" />
        <StyledButton onClick={handleSaveUser}>Cadastra-se</StyledButton>
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