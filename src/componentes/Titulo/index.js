import styled from "styled-components";

export const Titulo = styled.h2`
    font-weight: 700;
    color: ${ props => props.cor || '#000' };
    font-size: ${ props => props.tamanhoFonte || '1.5em' };
    text-align: ${ props => props.alinhamento || 'center'};
    text-transform: uppercase;
    width: 100%;
`