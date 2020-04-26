import { connect } from 'react-redux';
import * as twitchActions from '../../actions/twitch_actions';
import * as sortActions from '../../actions/sort_actions'
import TwitchClipPlayer from './clips_player';

const initialState = {
    clips: []
}

const mapStateToProps = (state = initialState) => {
    return { clips: state.clips}
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
)(TwitchClipPlayer);
  