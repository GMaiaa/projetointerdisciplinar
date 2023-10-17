import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "logo header"
    "menu search"
    "menu content"
    "newitem content";
`;

export const Logo = styled.div`
  grid-area: logo;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-right-width: 1px;
  border-right-style: solid;

  background-color: #f5f5fa;

  > h1{
    font-size: 24px;
    color: #f2a61f;
    text-transform: uppercase;
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  background-color: #f5f5fa;

  padding-top: 64px;
  text-align: center;

  border-right-width: 1px;
  border-right-style: solid;


  >li {
    margin-bottom: 24px;
  }
  
`;

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
  
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;

  
`;

export const NewItem = styled.li`
  grid-area: newitem;

  background-color: #f2a61f;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

    

  svg{  
    margin-right: 8px;
  }

`