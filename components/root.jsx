import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Link } from 'react-router-dom';

import TwitchClipsSearchContainer from './twitch_clips_search_container'
import TwitchClipsListContainer from './twitch_clips_list/twitch_clips_list_container'

const Root = ({ store }) => {
    return (
      <Provider store={store}>
        <HashRouter>
          <nav class="menu">
            <header>Rekappa</header>
            <ul className="menu-list">
              <li className="menu-item"><Link to="/">Main</Link></li>
              <li className="menu-item"><Link to="/list">List</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={TwitchClipsSearchContainer} />
          <Route exact path="/list" component={TwitchClipsListContainer} />
          {/* <TwitchClipsSearchContainer /> */}
        </HashRouter>
      </Provider>
    );
  };

export default Root;