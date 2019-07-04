import React, { Component } from 'react';
import InputBase from "@material-ui/core/InputBase";
// import Search from "@material-ui/icons/Search";
import DeleteIcon from '@material-ui/icons/Delete';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <div>
            <InputBase
              placeholder="Search ..." 
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
