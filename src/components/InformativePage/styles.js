import styled from "styled-components";

export const Container = styled.div`
   width: 1200px;
  margin: 0 auto;
  padding-top: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 400px;
  }
`;

export const Content = styled.div`
    width: 600px;

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: #f9a826;
  }
  > button {
    font-size: 24px;
    margin-bottom: 50px;
  }

  > p {
    margin-top: 80px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
  gap: 100px;
`;
