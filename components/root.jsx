import React from 'react';
import { Provider } from 'react-redux';

import TwitchClipsSearchContainer from './twitch_clips_search_container'

const Root = ({ store }) => {
    return (
      <Provider store={store}>
        <TwitchClipsSearchContainer />
      </Provider>
    );
  };

export default Root;