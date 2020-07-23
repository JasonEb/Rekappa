import React from 'react';

function TwitchClipItemiFrame({ clip, options = {} }) {
    let slug = (typeof clip === 'undefined') ? "" : clip.slug; 

    let src = `https://clips.twitch.tv/embed?clip=${slug}&tt_medium=clips_api&tt_content=embed&autoplay=true&muted=false&parent=jasoneb.github.io/`
    let autoplay = options.autoplay || false

        return (
            <iframe
                src={src}
                height="380"
                width="500"
                frameBorder="0"
                scrolling="no">
            </iframe>
    );
  }
  
  export default TwitchClipItemiFrame;