import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaItem from '../components/mediaItem';

class MediaContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.currentMedia) {
      return false;
    }
      
    return (
      <div>
        <MediaItem height="480" trailer={this.props.currentMedia.trailer}/>
      </div>
    );
  }
}

function mapStateToProps({ currentMedia }) {
  return { currentMedia };
}

export default connect(mapStateToProps)(MediaContainer);
