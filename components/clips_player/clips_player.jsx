import React from 'react'

import TwitchClipItemiFrame from '../twitch_clip_item_iframe';

class ClipPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      idx:0
    };

    this.handleControls = this.handleControls.bind(this);
    this.incrementIdx = this.incrementIdx.bind(this);
    this.decrementIdx = this.decrementIdx.bind(this);
  }

  handleControls(e) {
    e.preventDefault();
    let choice = e.currentTarget.name;

    //update current idx
    if (choice === "next"){
      this.incrementIdx()
    } else if (choice =="prev") {
      this.decrementIdx()
    } else {
      this.setState({idx: 0})
    }
  }

  incrementIdx() {
    let {clips} = this.props
    let {idx} = this.state
    if (idx > clips.length) {
      this.setState({idx: 0});
    } else {
      this.setState({idx: this.state.idx + 1});
    }
  }

  decrementIdx() {
    let {clips} = this.props
    let {idx} = this.state
    if (idx <= 0) {
      this.setState({idx: clips.length});
    } else {
      this.setState({idx: this.state.idx - 1});
    }
  }
  



  render() {
    let { clips} = this.props;
    let currentClip = clips[this.state.idx];
    return (
      <div className="twitch_clip_search">
        <div className="controls">
          <div>current idx: {this.state.idx}</div>
          <button name="prev" onClick={this.handleControls}>Previous</button>
          <button name="next" onClick={this.handleControls}>Next</button>
        </div>
        <div className="player">
          <TwitchClipItemiFrame clip={currentClip} />
        </div>
      </div>
    );
  }
}

export default ClipPlayer;