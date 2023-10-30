import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`


  > body{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fcf3ec;
  }

  display: block;
  position: relative;
  padding: 1.5em 3em;
  appearance: none;
  border: 0;
  background: transparent;
  color: ${(props) => props.color};
  text-transform: uppercase;
  letter-spacing: 0.25em;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0;
  box-shadow: inset 0 0 0 2px currentcolor;
  transition: background 0.8s ease;
  
  &:hover{
    background-color: ${(props) => props.color};
    color: white;
    outline: 3px solid ${(props) => props.color};
    outline-offset: 10px
  }

 
`;
	


  