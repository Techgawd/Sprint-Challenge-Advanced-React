import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/NavBar.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(players => this.setState({ players }))
      .catch(err => console.log("Error on Fetch: ", err));
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1 data-testid='PlayersHeader'>Players</h1>
              <div id="PlayerList" data-testid="PlayerList">
          {this.state.players.map(player => {
            return (
              <div key={player.id}>
                <h2 data-testid='nameOfYourChoice'>{player.name}</h2>
                <h4>{player.country}</h4>
                <h5>{player.searches}</h5>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}
}

export default App;
