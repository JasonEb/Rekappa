export const SORT_GAME_CLIPS = 'SORT_GAME_CLIPS';

export const sortClipsBy = (clips, sort_type) => dispatch => {
    let result = [...clips];
    let sortBy = sort_type;
    switch (sort_type) {
        case 'least-views':
            result.sort(ByLeastViews);
            break;
        case 'channel':
            result.sort(ByChannel);
            break;
        case 'game':
            result.sort(ByGame);
            break;
        default:
            result.sort(ByMostViews);
            break;

    }
    return dispatch(receiveSortedClips(result))
}

const ByMostViews = (clip_a, clip_b) => {
    return clip_a.views <= clip_b.views ? 1 : -1
}

const ByLeastViews = (clip_a, clip_b) => {
    return clip_a.views >= clip_b.views ? 1 : -1
}

const ByChannel = (clip_a, clip_b) => {
    return clip_a.broadcaster.name >= clip_b.broadcaster.name ? 1 : -1
}

const ByGame = (clip_a, clip_b) => {
    return clip_a.game >= clip_b.game ? 1 : -1
}

export const receiveSortedClips = clips => {
    return {
        type: SORT_GAME_CLIPS,
        clips
    }
}