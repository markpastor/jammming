import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchBar from '../searchbar/searchbar';
import SearchResults from '../searchresults/searchresults';
import Playlist from '../playlist/playlist';

class App extends Component {
  constructor(props) {
      super(props);
{/*      this.state = { name: 'name 1', artist: 'artist 1', album: 'album 1', id: 'id 1' }; */}
        this.state = {searchResults: ['name1','artist1','album1','id1']}
    }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
             <SearchResults SearchResults={ this.state.searchResults } />
             <Playlist />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
