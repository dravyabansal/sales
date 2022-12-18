import React, { Component } from 'react';
import { Media, Player, controls } from 'react-media-player'
const { PlayPause, MuteUnmute } = controls;
 
class VideoApp extends Component {
  render() {
    return (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src={require('../../assets/images/example video.mp4')} />
          </div>
          <div className="media-controls">
            <PlayPause />
            <MuteUnmute />
          </div>
        </div>
      </Media>
    )
  }
}

export default VideoApp
