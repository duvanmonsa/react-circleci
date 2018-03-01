import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: 'none'
    };
    this.onClick = this.onClick.bind(this);

  }
  onClick(){

      const newthis = this;
      axios.get('http://localhost:4000/users')
          .then(function (response) {
              newthis.setState({user: response.data.user})
          })
          .catch(function (error) {
              console.log(error);
          });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <input type="button" value="Get User Name" onClick={this.onClick} className="get-button"/>
            <div className="user-name">
                {this.state.user}
            </div>

        </p>
      </div>
    );
  }
}

export default App;
