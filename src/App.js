import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import FieldDetails from "./components/FieldDetails";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cancha/:id" element={<FieldDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
