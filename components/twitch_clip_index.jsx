import React from 'react';

//Twitch Clip Index Item import

function TwitchClipIndex({ clips }) {
    return (
      <ul>
        { giphys.map(giphy => <GiphysIndexItem key={giphy.id} giphy={giphy} />) }
      </ul>
    );
  }
  
  export default TwitchClipIndex;