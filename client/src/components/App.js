import axios from '../utils/axios-config';
import React from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    axios.get('/ping')
      .then((res) => {
        this.setState({
          data: res.data.greeting
        });
      })
      .catch((err) => {
        this.setState({
          data: err.message
        });
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.data}</h1>
        </header>
      </div>
    );
  }
}

export default App;
