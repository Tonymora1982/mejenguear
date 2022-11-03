import logo from './images/balon.png';
import fondo from './images/fondo.jpg';
import './App.css';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        < Login />
        </div>
      
    </div>
  );
}

export default App;
