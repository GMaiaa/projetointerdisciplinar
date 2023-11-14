import styled from 'styled-components'

export const Container = styled.button`
    background: none;
    color: #f2a61f;

    border: none;
    font-size: 16px;

    ${props => props.isAdminPanel && `
    font-size: 22px; /* Aumenta o tamanho da fonte */
    margin-top: 20px; /* Move o botão para baixo */
  `}
`