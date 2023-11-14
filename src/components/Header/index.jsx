import { RiShutDownLine } from "react-icons/ri";
import { BiSolidUserPin,BiLogoWhatsappSquare } from "react-icons/bi";
import { Container, Logo, Options, Navigation, OptionButton} from "./styles";
import { StyledCgProfile } from './styles.js';
import { CgProfile } from "react-icons/cg";
import { FiMail, FiLock } from "react-icons/fi"
import { BiSupport } from "react-icons/bi"
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import  LogoImg from "../../assets/logo.png"
import { useState } from "react";
import { Input } from "../Input";
import Checkbox from "../Checkbox";
import { api } from "../../services/api";
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link } from "react-router-dom";
 
 
export function Header() {
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
       <OptionButton to="/cart">
       <AiOutlineShoppingCart/>
       </OptionButton>
       <OptionButton to="/support">
       <BiSupport/>
       </OptionButton>
      </Options>
    </Container>
     
  );
}