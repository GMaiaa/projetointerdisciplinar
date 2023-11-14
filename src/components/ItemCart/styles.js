import styled from "styled-components";
 
export const Container = styled.div`
width: 405px;
height: 105px;
display: flex;
align-items: center;

gap: 10px;

> img{
    width: 72px;
}



> p{
    color: #878787;
    font-size: 15px;
}

> button{
border: none;
background: none;
font-size: 16px;
color: #ff6961;

}
 
`

export const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
> h1{
    font-size: 30px;
    font-weight: 500;
}

> input{
    width: 50px;
    height: 30px;

    font-weight: 500;
    
    border: 2px solid;
    border-radius: 5px;
}
`