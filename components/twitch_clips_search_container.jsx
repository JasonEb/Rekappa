import { connect } from 'react-redux';
import TwitchClipsSearch from './twitch_clips_search';
import * as twitchActions from '../actions/twitch_actions';
import * as sortActions from '../actions/sort_actions'

const initialState = {
    clips: [],
    channel: ""
}

const mapStateToProps = (state = initialState) => {
    return { clips: state.clips, originalClips: [...state.clips] }
};
  
const mapDispatchToProps = dispatch => {
    return {
        fetchSearchTwitchClipsByGame: (searchTerm, languages,period) =>
            dispatch(twitchActions.fetchSearchTwitchClipsByGame(searchTerm, languages,period)),
        filterClipsByChannel: (clips, channel) => {
            return dispatch(twitchActions.filterClipsByChannel(clips, channel))
        },
        sortClipsBy: (clips, sort_type) => {
            return dispatch(sortActions.sortClipsBy(clips,sort_type))
        },
        resetClips: (clips) => dispatch(twitchActions.resetFetchedClips(clips))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TwitchClipsSearch);
  