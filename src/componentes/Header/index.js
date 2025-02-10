import Logo from '../Logo';
import MenuHeader from '../MenuHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;

`
function Header(){
    return (
        <HeaderContainer>
            <Logo/>
            <MenuHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;