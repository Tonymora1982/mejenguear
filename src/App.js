import logo from './images/balon.png';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
        <div>
        < NavBar />
        </div>
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="Login">
        < Login />
        </div>
    </div>
  );
}

export default App;
