import { combineReducers } from 'redux';

import twitchReducer from './twitch_reducer';

export default combineReducers({
  clips: twitchReducer
});