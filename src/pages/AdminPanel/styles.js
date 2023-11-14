import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const NewItem = styled(Link)`
  grid-area: newitem;
cursor: pointer;
  background-color: #f2a61f;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

    

  svg{  
    margin-right: 8px;
  }

`
export const Table = styled.table`
        display: block;
        overflow: auto;
        overflow: overlay;
        white-space: nowrap;
        
        width: 100%;
        max-height: 544px;
        margin-top: 35px;
        
        border: 2px solid  #f2a61f;
        border-radius: 0.8rem;
        border-collapse: collapse;



        font-size: 14px;
        color: black;

     th {
        position: sticky;
        top: 0px;

        height: 64px;
        padding: 21px 24px;
        border-bottom: 2px solid  #f2a61f;
        
        text-align: left;
        color: black;
        background:  #f2a61f;
    }

     th:first-child {
        width: 150px;
    }

     th:nth-child(2) {
        width: 151px;
    }

     th:nth-child(3) {
        width:1000px;
    }

     th:last-child {
        width: 250px;
    }

     tr {
        border-bottom: 2px solid  #f2a61f;
    }

     tr:nth-child(even) {
        background:  #f2a61f;
    }

     tr:last-child {
        border-bottom: none;
    }

    table td {
        height: 80px;
        padding: 16px 24px;
    }

     th:nth-child(-n+3),
     td:nth-child(-n+3) {
        border-right: 2px solid  #f2a61f;
    }

    select {
        max-width: 175px;
        background: white;

        
        border: 1px solid black;

        padding: 13px 16px;
    }`