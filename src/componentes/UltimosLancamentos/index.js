import styled from "styled-components";
import CardRecomendado from "../CardRecomendado";
import imagemLivro from "../../img/livro2.png";
import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';


const ContainerNews = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 2em;

`
const ContainerBloco = styled.div`

    background-color: #d7d7d7;
    
`

const ContainerLancamentos = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em;
    flex-wrap: wrap;

    p{
        text-align: center;
        font-size: 1.2em;
        font-weight: 500;
    }

    div{
        padding: 0 1.2em;
        transition: transform 0.3s ease-in-out;
        cursor: pointer;
    }

    img{
        /* transition: transform 2s ease-in-out; */
    }

    div:hover{
        transform: scale(1.10);
    }
`

function UltimosLancamentos(){
    return(
        <ContainerNews>
            <Titulo 
            tamanhoFonte='2em'
            cor = '#eeae4a'>Últimos Lançamentos</Titulo>
            <ContainerBloco>
                <ContainerLancamentos>
                    {livros.map( livro => (
                        <div>
                            <p>{livro.nome}</p>
                            <img src={livro.src}/>
                        </div>
                    ))}
                </ContainerLancamentos>

                <CardRecomendado
                        titulo= "Talvez você se interesse por..."
                        subtitulo= "Angular 11"
                        descricao= "Construindo uma aplicação com a plataforma Google"
                        img = {imagemLivro}
                    ></CardRecomendado>
            </ContainerBloco>
        </ContainerNews>
    )
}

export default UltimosLancamentos;