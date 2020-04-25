import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_GAME_CLIPS = 'RECEIVE_SEARCH_GAME_CLIPS';
export const REQUEST_SEARCH_GAME_CLIPS = 'REQUEST_SEARCH_GAME_CLIPS';
export const RECEIVE_CHANNEL_CLIPS = 'REQUEST_CHANNEL_CLIPS';
export const RESET_FETCHED_CLIPS = 'RESET_FETCHED_CLIPS';

export const fetchSearchTwitchClipsByGame = (searchTerm, languages, period) => dispatch => {
	return APIUtil.fetchGameClips(searchTerm, languages, period)
		.then(resp => dispatch(receiveSearchGameClips(resp.clips)))
};

export const filterClipsByChannel = (clips, channel) => dispatch => {
		let result = [];
		debugger
		clips.forEach( (clip) => {
			if (clip.broadcaster.display_name === channel || channel === "all") {
				result.push(clip);
			}
		})
		return dispatch(receiveChannelClips(result))
};


export const receiveSearchGameClips = clips => {
	return {
		type: RECEIVE_SEARCH_GAME_CLIPS,
		clips
	}
};

export const receiveChannelClips = clips => {
	return {
		type: RECEIVE_CHANNEL_CLIPS,
		clips
	}
};

export const resetFetchedClips = clips => {
	debugger
	return {
		type: RESET_FETCHED_CLIPS,
		clips
	}
};

//sort