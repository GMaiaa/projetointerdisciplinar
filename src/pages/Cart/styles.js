import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  margin-left: 220px;
  align-items: center;

  
`;

export const AboutOrder = styled.div`
  width: 1200px;
  justify-content: space-between;
  display: flex;
`;

export const TotalValue = styled.p`
  font-size: 23px;
  color: #f2a61f;
`

export const RadioContainer = styled.div`
  > label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    > input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    > .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
    }

    > input:checked ~ .checkmark {
      background-color: #f2a61f;
    }

    > .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    > input:checked ~ .checkmark:after {
      display: block;
    }

    > .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

export const Select = styled.select`

  > body {
    display: grid;
    place-items: center;
    min-height: 100vh;
    background: linear-gradient(35deg, red, purple);
  }
  margin-bottom: 8px;
  appearance: none;
  border: 0;
  outline: 0;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;

  width: 100%;
  padding: 1rem 4rem 1rem 1rem;
  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
      no-repeat right 0.8em center / 1.4em,
    linear-gradient(to left, #f2a61f 3em, #f5f5fa 3em);
    color: #424244;
  border-radius: 10px;
  cursor: pointer;
  /* Remove IE arrow */
  &::-ms-expand {
    display: none;
  }
  /* Remove focus outline */
  &:focus {
    outline: none;
  }
  /* <option> colors */
  > option {
    color: inherit;
    
    background-color: #f5f5fa;
  }
`;



export const Order = styled.div`
  grid-area: order;
  margin: 34px 0 0 120px;

  > h1 {
    font-size: 30px;
    font-family: "Poppins", sans-serif;
    color: #f2a61f;
    font-weight: bold;
  }
`;

export const ItemsCart = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 34px;
`;

export const Info = styled.div`
  margin-top: 34px;
  width: 340px;
  grid-area: info;

  > h1 {
    font-size: 30px;
    font-family: "Poppins", sans-serif;
    color: #f2a61f;
    font-weight: bold;
  }
`;

export const Form = styled.form`
  margin-top: 34px;
`;

export const Payment = styled.div``;

export const Options = styled.div``;
