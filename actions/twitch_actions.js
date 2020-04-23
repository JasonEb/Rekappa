import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_GAME_CLIPS = 'RECEIVE_SEARCH_GAME_CLIPS';
export const REQUEST_SEARCH_GAME_CLIPS = 'REQUEST_SEARCH_GAME_CLIPS';

export const fetchSearchTwitchClipsByGame = (searchTerm, languages) => dispatch => {
	return APIUtil.fetchGameClips(searchTerm, languages)
		.then(resp => dispatch(receiveSearchGameClips(resp.clips)))
};

export const receiveSearchGameClips = clips => {
	return {
		type: RECEIVE_SEARCH_GAME_CLIPS,
		clips
	}
};
