import styled from "styled-components";

export const Container = styled.select`

  > body {
    display: grid;
    place-items: center;
    min-height: 100vh;
    background: linear-gradient(35deg, red, purple);
  }
  margin-bottom: 8px;
  appearance: none;
  border: 0;

  /* Personalize */
  width: 100%;
  padding: 1rem 4rem 1rem 1rem;
  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
      no-repeat right 0.8em center / 1.4em,
    linear-gradient(to left, #f2a61f 3em, #f5f5fa 3em);
    color: #424244;
    font-size: 16px;
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
    font-size: 16px;
    background-color: #f5f5fa;
  }
`;
