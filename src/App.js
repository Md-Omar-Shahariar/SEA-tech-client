import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
  const [theme, setTheme] = useState(null);

  return (
    <div data-theme={theme ? "pastel" : "luxury"}>
      <Navbar setTheme={setTheme} theme={theme}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
