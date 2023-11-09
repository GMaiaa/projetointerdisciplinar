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
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
 
const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
    phone: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().min(5, "A senha deve ter no mínimo 5 caracteres").required("Campo obrigatório"),
    confPassword: yup.string().min(5, "A senha deve ter no mínimo 5 caracteres").required("Campo obrigatório").oneOf([yup.ref('password'), null],"As senhas não correspondem!")
  })
 
export function Header() {
  const [modal, setModal] = useState(false)
 
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    resolver: yupResolver(schema),
  })
 
 async function handlesaveUser({confPassword, password, ...rest}){

    console.log({...rest});
 
     await api.post("/user" , {...rest, password});
 
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
      
      <a href="../"> <img src={LogoImg} alt="Logo da Quitanda Frescor" /> </a>

      </Logo>
      <Navigation>
    <ul>
      <a href="#IDfruta"> <li> Frutas </li> </a>
      <a href="#IDVerdura"><li> Verduras </li> </a>
      <a href="#IDLegume"><li> Legumes </li> </a>
      <a href="#IDBebida"><li> Bebidas </li> </a>
      <a href="#IDseila"><li> Não Alimentar </li> </a>
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
      <form onSubmit={handleSubmit(handlesaveUser)}>
 
       
 
        <Controller
          name="name"
          render={({ field: { onChange, onBlur, value }}) => (
            <Input placeholder="Nome completo" type="text" icon={BiSolidUserPin} onChange={onChange} onBlur={onBlur} value={value} errors={errors.firstName?.message} />
          )}
          control={control}
        />
 
        <Controller
          name="phone"
          render={({ field: { onChange, onBlur, value }}) => (
            <Input placeholder="Celular" type="text" icon={BiLogoWhatsappSquare} onChange={onChange} onBlur={onBlur} value={value} errors={errors.phone?.message} />
          )}
          control={control}
        />
 
        <Controller
          name="email"
          render={({ field: { onChange, onBlur, value }}) => (
            <Input placeholder="E-mail" type="text" icon={FiMail} onChange={onChange} onBlur={onBlur} value={value} errors={errors.email?.message} />
          )}
          control={control}
        />
 
        <Controller
          name="password"
          render={({ field: { onChange, onBlur, value }}) => (
            <Input placeholder="Senha" type="password" icon={FiLock} onChange={onChange} onBlur={onBlur} value={value} errors={errors.password?.message} />
          )}
          control={control}
        />
 
        <Controller
          name="confPassword"
          render={({ field: { onChange, onBlur, value }}) => (
            <Input placeholder="Confirme sua Senha" type="password" icon={FiLock} onChange={onChange} onBlur={onBlur} value={value} errors={errors.confPassword?.message} />
          )}
          control={control}
        />
       
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