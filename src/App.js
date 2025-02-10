import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';


const AppContainer =styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    font-size: 16px;
    margin: 0;
    padding: 0;
`

function App() {
  return (
    <AppContainer>
      <Header />  
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
