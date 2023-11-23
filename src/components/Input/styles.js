import styled from 'styled-components'
 
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
 
    border: ${props => props.errors ? '1px solid red' : 'none'};
 
    background-color: #f5f5fa;
    color: black;
 
    margin-bottom: 8px;
    border-radius: 10px;
 
    div {
        width: 100%;
        display: flex;
        align-items: center;
    }
 
    > p {
        padding-left: 15px;
        padding-top: 15px;
        color: red;
    }
 
    > div > input{
        height: 56px;
        width: 100%;
 
        padding: 12px;
 
        color: black;
        background: transparent;
        border: 0;
 
        &:placeholder{
            color: #424244;
        }
    }
    > div > svg{
            margin-left: 16px;
        }
`;