import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background-color: #f5f5fa;
    color: black;

    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &::placeholder{
        color: #424244;

    }
`