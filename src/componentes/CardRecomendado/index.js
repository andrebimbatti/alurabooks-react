import styled from "styled-components";
import { Titulo } from "../Titulo"

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
    width: 20vw;
    margin: 1em 40vw 2em 40vw;
    padding: 1em 1em;

    border: 1px solid #fff;
    border-radius: 24px;

    background-color: #fff;

    transition: none;

    Card:hover{
        transform: none;
    }

`
const ColunaCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: .5em 0;

    p{
        width: 70%;
        margin: 0;
        padding-bottom: 0.5em;
    }


    button{
        width: 150px;
        background-color:#eeae4a;
        color: #fff;

        border-radius: 0.7em;
        border-color: #FFF ;
        padding: 1em 2.5em;
        margin: 1em 0;

        text-align: center;
        cursor: pointer;
    }

    button:hover{
        background-color: rgb(5, 81, 133);

        color: #eeae4a;
    }

    img{
        /* padding-right: 2em; */
    }
`

function CardRecomendado({titulo, subtitulo, descricao, img}){
    return(
        <Card>
            <ColunaCard>
                <Titulo
                tamanhoFonte="1.2em"
                cor="#eeae4a"
                >{titulo}</Titulo>
                
                <Titulo
                tamanhoFonte="1em"
                >{subtitulo}</Titulo>
                
                <p>{descricao}</p>
            </ColunaCard>
            <ColunaCard>
                <img src={img}/>
                <button>Saiba mais...</button>
            </ColunaCard>
        </Card>
    )
}

export default CardRecomendado;