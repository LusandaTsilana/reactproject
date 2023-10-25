import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </header>

      <body></body>
    </div>
  );
}

export default App;
