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
       <AiOutlineShoppingCart/>
       </OptionButton>
       <OptionButton to="/support">
       <BiSupport/>
       </OptionButton>
      </Options>
    </Container>
     
  );
}