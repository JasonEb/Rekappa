import React from 'react';

//Twitch Clip Index Item import
import TwitchClipItem from './twitch_clip_item'

function TwitchClipIndex({ clips }) {
    return (
      <ul>
        { clips.map(clip => <TwitchClipItem clip={clip} /> )}
      </ul>
    );
  }
  
  export default TwitchClipIndex;