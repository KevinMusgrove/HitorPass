import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {randomNumber : Math.floor(Math.random() * 10) + 1}
  }


  render() {
    return (
      <div className="col-sm-10 offset-sm-5 text-center">
        <div className="App">
          <div className="card" style={{width:'18rem'}}>       
            <div className="card-body">
              <p className="card-text">{this.state.randomNumber}</p>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}

export default App;
