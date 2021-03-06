import React from 'react';

import TwitchClipItemiFrame from './twitch_clip_item_iframe';

function TwitchClipItem({ clip}) {
    if (typeof clip === 'undefined') { 
      debugger
    }
    return (
      <li className="clip_item" key={clip.slug}> 

        <div className={"clip_views"}>👁 {clip.views}</div>      
        <a href={clip.url} className="clip_item_anchor" target="_blank">
            <img src={clip.thumbnails.small} />
        </a>
        <div className="clip_item_info">
          <div className="clip_title">{clip.title}</div>

          <a href={clip.broadcaster.channel_url} target="_blank">
            <div className="clip_broadcaster_name"> {clip.broadcaster.name}</div>
          </a>
          <div className="clip_game"> {clip.game}</div>
        </div>
      </li>
    );
  }
  
  export default TwitchClipItem;