import React from 'react';

//Twitch Clip Index Item import
import TwitchClipItem from './twitch_clip_item'

function TwitchClipIndex({ clips }) {
    return (
      <ul className="clips_index">
        { clips.map(clip => <TwitchClipItem clip={clip} key={clip.slug} /> )}
      </ul>
    );
  }
  
  export default TwitchClipIndex;