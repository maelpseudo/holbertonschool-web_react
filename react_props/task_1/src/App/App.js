import React from 'react';
import './App.css';
import { Header } from "../Header/Header";
import { Login } from "../Login/Login";
import { Footer } from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        <p>
        Login to access the full dashboard
        </p>
        <Login/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;