import React, { Component } from 'react';
import './App.css';



export default class App extends Component {
  render() {

    function clicker(cow){
      document.getElementById("cow").onclick = function(event) {
          document.getElementById("cow").style.display="none";
      }
    }
    return (
      <div>
        <h1>Double-Click to tip da cowwww</h1>
          <div className="container">
            <img id="cow" className="cow" src="cow.png" alt="1" onClick={clicker}/>
          </div>
      </div>
    );
  }
}

