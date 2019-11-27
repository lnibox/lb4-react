import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const App: React.FC = () => {
  const [ greeting, setGreeting ] = useState('');
  useEffect(() => {
    axios.get('/ping')
      .then((res) => {
        setGreeting(res.data.greeting);
      });
  }, [greeting]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {greeting}
        </a>
      </header>
    </div>
  );
}

export default App;
