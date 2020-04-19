import { RECEIVE_SEARCH_GAME_CLIPS } from '../actions/twitch_actions';

const twitchReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_GAME_CLIPS:
      return action.clips;
    default:
      return state;
  }
};

export default twitchReducer;
