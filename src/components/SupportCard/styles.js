import styled from "styled-components";

export const Container = styled.div`

    > body{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        font-family: "Poppins", sans-serif;
    }
    width: 300px;
    height: 550px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    transition: all 0.6s ease;

    &:hover{
        box-shadow: rgba(255, 172, 28, 0.199) -10px 10px, rgba(255, 172, 28, 0.19) -20px 20px ;
    }

`

export const Image = styled.div`
    height: 40%;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props => props.backgroundImage});
    background-size: cover;
    
`   

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-weight: 300;

    > h3{
        width: 200px;
    font-weight: 300;
    font-size: 30px;
    padding-bottom: 5px;
    border-bottom: 4px solid #FFAC1C;
    }

    > p{
        font-size: 22px;
    margin-top: 20px;
    margin-bottom: 15px;
    }

    > a{
        list-style-type: none;
    text-decoration: none;
    }

    >  a button{
        font-weight: 100;
    font-size: 20px;
    color: #FFAC1C;
    width: 100%;
    height: 45px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    background-color: #ffac1c26;
    transition: 0.2s ease-in-out;
    }

    > button:hover{
        background-color: #ffac1c3f;
    cursor: pointer;
    }
`