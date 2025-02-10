import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const MenuIcones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.li`
  margin-right: 40px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover{
    transform: scale(1.20);
  }
`

const icones = [perfil, sacola]

function IconesHeader() {
    return(
        <MenuIcones>
          {icones.map((icone) => (
            <Icone><img src={icone}></img></Icone>
          ))}
        </MenuIcones>
    )
}

export default IconesHeader;