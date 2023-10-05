import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: #f5f5fa;
    color: black;

    margin-bottom: 8px;
    border-radius: 10px;


    > input{
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
    > svg{
            margin-left: 16px;
        }
`;