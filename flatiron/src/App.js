import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FormTransaction from './components/FormTransaction';
import TableRowTransaction from './components/TableRowTransaction';
import TableTransaction from './components/TableTransaction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
  );
}

export default App;
