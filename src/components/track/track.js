import React from 'react';
import './track.css';

class Track extends React.Component {

  renderAction() {
  return <div className="Track-action">
  if (this.props.isRemoval == True) {
    <a>'-'</a>
  } else {
    <a>"+"</a>
  }
</div>
};

  render() {
  return <div className="Track">
  <div className="Track-information">
    <h3>track1</h3>
    <p>artist1 | album1</p>
  </div>
  <a className="Track-action">'+ or -'</a>
  <renderAction />
</div>
};
}

export default Track
