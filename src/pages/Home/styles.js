import styled from "styled-components";

export const Container = styled.div``;

export const AboutContent = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: 400px;
  }

  > div h2 {
    color: #050505;
    font-family: "Rubik", sans-serif;
    text-transform: uppercase;
    font-size: 25px;
  }

  > div h2 span {
    color: #f2a61f;
    font-weight: bold;
  }

  > div p {
    color: #2c2c2c;
    font-size: 20px;
    margin: 40px 0;
  }

  > img {
    width: 400px;
  }

  @media screen and (max-width: 900px) {
    > img {
      width: 200px;
    }
    > div {
    width: 200px;
  }
  

  @media screen and (max-width: 360px) {
    flex-direction: column;
    width: 360px;
    > img {
      width: 200px;
    }
    > div {
    width: 200px;
  }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 100px auto;
  padding-top: 65px;
  display: flex;
  align-items: center;

  > h1 {
    text-align: center;
    font-size: 25px;
    color: #f2a61f;
    text-transform: uppercase;
  }

  >button{
    flex-direction: end;
  }

  @media screen and (max-width: 900px) {

  }
  

  @media screen and (max-width: 360px) {
    justify-content: center;
    width: 360px;
    }
`;

export const Items = styled.ul`
  gap: 50px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 900px) {

  }

  @media screen and (max-width: 360px) {
    width: 360px;
    flex-direction: column;
  }
`