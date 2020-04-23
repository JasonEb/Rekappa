import * as TwitchActions from '../actions/twitch_actions';

const twitchReducer = (state = [], action) => {
  switch (action.type) {
    case TwitchActions.RECEIVE_SEARCH_GAME_CLIPS:
      return action.clips;
    case TwitchActions.RECEIVE_CHANNEL_CLIPS:
      return action.clips;
    case TwitchActions.RESET_FETCHED_CLIPS:
      return action.clips;
    default:
      return state;
  }
};

export default twitchReducer;
