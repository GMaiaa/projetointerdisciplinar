import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  align-items: center;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: gray;

  background-color: #f5f5fa;
  color: #17171f;

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 150px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;

  > ul {
    display: flex;
    margin: 10px;
    text-decoration: none;
    list-style: none;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    gap: 80px;
  }

  > ul li {
    cursor: pointer;
    position: relative;
  }

  > ul li:hover {
    color: #f2a61f;
    transition: 0.3s;
  }

  > ul li::after {
    content: "";
    position: absolute;
    display: block;
    height: 0.4rem;
    width: 0%;
    background: #f2a61f;
    bottom: -1rem;
    transition: all ease-in-out 250ms;
  }

  > ul li:hover::after {
    width: 60%;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 50px;

  > button {
    color: black;
    font-size: 36px;
    border: none;
    background: none;
  }

  > button:hover {
    color: #f2a61f;
    transition: 0.3s;
  }
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const Overlay = styled.div`
  background: rgba(49, 49, 49, 0.8);
  height: 100vh;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: white;
  padding: 50px;
  border-radius: 10px;
  max-width: 600px;
  min-width: 300px;
  
  > button {
    color: black;
    font-size: 16px;
    border: none;
    background: none;
    cursor: pointer;

    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
  }
    span{
      color: #f2a61f;
    }

    h3{
      margin-bottom:10px;
    }

  
`


export const StyledButton = styled.button`  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;
  /* width: 153px; */
  height: 40px;
  background-color: #f2a61f;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s;
  border-radius: 0.25rem;
  border: none;
  margin-top: 20px;

  &:hover {
    color: black;
  }
`;





