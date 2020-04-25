import * as TwitchActions from '../actions/twitch_actions';
import * as SortActions from '../actions/sort_actions';

const twitchReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case TwitchActions.RECEIVE_SEARCH_GAME_CLIPS:
      return action.clips;
    case TwitchActions.RECEIVE_CHANNEL_CLIPS:
      return action.clips;
    case TwitchActions.RESET_FETCHED_CLIPS:
      return action.clips;
    case SortActions.SORT_GAME_CLIPS:
      return action.clips;
    default:
      return state;
  }
};

export default twitchReducer;
