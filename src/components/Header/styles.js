import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  align-items: center;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: gray;

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 100px;
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

  > ul li{
    cursor: pointer;
     position: relative;
  }

  > ul li:hover{
    color: #3c1424;
    font-size: 18px;
    transition: 0.3s;
  }

  > ul li::after {
  content: "";
  position: absolute;
  display: block;
  height: 0.4rem;
  width: 0%;
  background: #3c1424;
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
`;
