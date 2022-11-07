import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './images/balon.png';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import {Home} from './components/Home';


function App() {
  return (
    <div>
        <div className="Navbar">
        < NavBar />
        </div>
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
        </Routes>
        </BrowserRouter>
        
        <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="Login">
        < Login />
        </div>
    </div>
  );
}

export default App;
