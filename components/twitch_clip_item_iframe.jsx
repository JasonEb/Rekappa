import React from 'react';

function TwitchClipItemiFrame({ clip }) {
    let src = `https://clips.twitch.tv/embed?clip=${clip.slug}&tt_medium=clips_api&tt_content=embed&autoplay=false`
    
        return (
            <iframe
                src={src}
                height="242"
                width="480"
                frameborder="0"
                scrolling="no"
                autoplay="false"
                allowfullscreen="false">
            </iframe>
    );
  }
  
  export default TwitchClipItemiFrame;