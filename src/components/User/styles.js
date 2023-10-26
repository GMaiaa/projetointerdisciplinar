import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: #f5f5fa;

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: #17171f;
    font-family: "Poppins", sans-serif;
    text-transform: capitalize;
  }

  > p {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;






