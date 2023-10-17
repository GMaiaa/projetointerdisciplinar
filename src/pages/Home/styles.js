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
`;

export const Items = styled.div`
gap: 50px;
  display: flex;
  flex-direction: row;
`