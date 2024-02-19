import './App.css';
import LogRocket from 'logrocket';
import Header from './Components/Header';
import Body from './Components/Body';
import styled from 'styled-components';


function App() {
  return (
    <MainContainer className="app">
     <Header />
     <Body />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

LogRocket.init('wxyd62/pop-lock');
