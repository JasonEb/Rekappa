import React from 'react';


function TwitchClipItem({ clip }) {
    return (
      <li>
          <img src={clip.thumbnails.medium} />
      </li>
    );
  }
  
  export default TwitchClipItem;