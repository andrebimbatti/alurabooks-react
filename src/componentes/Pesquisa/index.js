import styled from 'styled-components';
import Input from '../Input';
import { useState } from 'react';
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 100vh;
        width: 100%;

`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;

`

const Subtitulo = styled.h3`
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 40px;

`

const ColunasResultado = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;

`

const Resultado = styled.div`
    padding: 1em;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;   
    
    p {
        font-size: 1.2em;
        font-weight: 700;
    };

    &:hover {
        transform: scale(1.05);
    };
`

function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return(
        <PesquisaContainer>
            <Titulo>Já Sabe por onde começar??</Titulo>
            <Subtitulo> Encontre nosso livro em nossa estante. </Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onBlur={evento =>{
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => (livro.nome.includes(textoDigitado)))
                    setLivrosPesquisados(resultadoPesquisa)
                } }/>
            
            <ColunasResultado>
                { livrosPesquisados.map( livro => (
                    <Resultado>
                        <p>{livro.nome}</p>
                        <img src={livro.src}/>
                    </Resultado>
                
                )) }
            </ColunasResultado>
        </PesquisaContainer>

    )
}

export default Pesquisa