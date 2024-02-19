import './App.css';
import LogRocket from 'logrocket';
import Header from './Components/Header';

function App() {
  return (
    <div className="app">
     <h2>Pop Lock</h2>
     <Header />
    </div>
  );
}

export default App;

LogRocket.init('wxyd62/pop-lock');
