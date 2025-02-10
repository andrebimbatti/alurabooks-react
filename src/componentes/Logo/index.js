import logo from '../../img/logo.svg';
import styled from 'styled-components';

const Logotipo = styled.div`
  display: flex;
  font-size: 2em;

  .logo__img{
    margin-right: 1em;
  }

`

function Logo() {
    return(
        <Logotipo>
          <img src={logo} className='logo__img'></img>
          <p><strong>Alura</strong>Books</p>
        </Logotipo>
    )
}

export default Logo;