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
    this.setClip = this.setClip.bind(this);
    this.timer = null;
  }

  componentDidMount() {
    let currentClip = this.props.clips[this.state.idx];
    this.timer = window.setTimeout(function () { 
      this.incrementIdx()
      return this.setClip()
    }.bind(this), currentClip.duration * 1000)
  }

  setClip() {
    let currentClip = this.props.clips[this.state.idx];
    //clear timer, set new timer
    window.clearTimeout(this.timer); 
    this.timer = window.setTimeout(function() {
      this.incrementIdx();
      return this.setClip()}.bind(this), currentClip.duration * 1000)
  }

  handleControls(e) {
    e.preventDefault();
    let choice = e.currentTarget.name;

    //update current idx
    if (choice === "next"){
      window.clearTimeout(this.timer);
      this.incrementIdx();
      this.setClip();
    } else if (choice =="prev") {
      window.clearTimeout(this.timer);
      this.decrementIdx();
      this.setClip();
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
          <TwitchClipItemiFrame clip={currentClip} options={{autoplay: true}} />
        </div>
      </div>
    );
  }
}

export default ClipPlayer;