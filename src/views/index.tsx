import React from 'react';
import "../App.css"
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


function Index() {
  return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to={'/auth'}>- Index Pokedex -</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Index