import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px ;
    border-bottom-style: solid ;
    border-bottom-color: gray;

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    > img{
        width: 100px;
    }
`

export const Options = styled.div`
    border: none;
    background: none;

    > button{
        color: black;
        font-size: 36px;
    }
`