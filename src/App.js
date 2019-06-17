import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import FlashCard from "./components/FlashCard/FlashCard";


function App() {
  return (
    <div className="App">
      <Navbar 
      nav1="home"
      nav2="about"
      nav3="contact"
      nav4="test"
      nav5="test"
      nav6="test"
       />
       <FlashCard />
    </div>
    
  );
}

export default App;
