import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import Root from './components/root';

//Debug
import * as TwitchAPI from './util/api_util';
import * as TwitchActions from './actions/twitch_actions';

document.addEventListener('DOMContentLoaded', () => {
	const store = configureStore();
	// const root = document.getElementById('root');
    // ReactDOM.render(<Root store={store} />, root);
    
    //Debug
    window.store = store;
    window.TwitchAPI = TwitchAPI;
    window.TwitchActions = TwitchActions;
});
