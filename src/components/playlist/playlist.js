import React from 'react';
import './playlist.css';
import TrackList from '../tracklist/tracklist';

class Playlist extends React.Component {
  render() {
  return <div className="Playlist">
    <input defaultValue={'New Playlist'}/>
{/*    <TrackList />  */}
    <a className="Playlist-save">SAVE TO SPOTIFY</a>
  </div>
    };
  };

export default Playlist
