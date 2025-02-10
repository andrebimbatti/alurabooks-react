import styled from 'styled-components';

const Menu = styled.ul`
    display: flex;

`
const MenuItens = styled.li`
    list-style: none;
    padding: 0 1em;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover{
        transform: scale(1.05);
        font-weight: 700;
        color:rgb(5, 81, 133);
    }

`

const menuItens = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function MenuHeader() {
    return (
        <Menu>
            {menuItens.map((item) =>(
                <MenuItens><p>{item}</p></MenuItens>
            ))}

        </Menu>
    )
}

export default MenuHeader;