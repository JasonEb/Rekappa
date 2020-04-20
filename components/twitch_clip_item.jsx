import React from 'react';

import TwitchClipItemiFrame from './twitch_clip_item_iframe';

function TwitchClipItem({ clip }) {
    return (
      <li>
        <a href={clip.url} target="_blank">
            <img src={clip.thumbnails.small} />
        </a>
        {/* <TwitchClipItemiFrame clip={clip} /> */}
      </li>
    );
  }
  
  export default TwitchClipItem;