import React from 'react';
import './tracklist.css';
import Track from '../track/track';

class TrackList extends React.Component {
  render() {
  return <div className="TrackList">
{/*      <!-- You will add a map method that renders a set of Track components  -->  */}
{/*  {this.props.tracks.map()} */}
  {this.props.tracks.map(track => {
              return <Track track={track} />
  })
}
  <p>track one</p>
  <p>track two</p>
  <p>track three</p>
  </div>
}
  };

export default TrackList
