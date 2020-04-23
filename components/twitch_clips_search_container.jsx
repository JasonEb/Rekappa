import { connect } from 'react-redux';
import TwitchClipsSearch from './twitch_clips_search';
import { fetchSearchTwitchClipsByGame } from '../actions/twitch_actions';

const mapStateToProps = state => {
    return { clips: state.clips };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        fetchSearchTwitchClipsByGame: (searchTerm, languages) => dispatch(fetchSearchTwitchClipsByGame(searchTerm, languages))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TwitchClipsSearch);
  