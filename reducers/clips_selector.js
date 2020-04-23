export const filterClipsByChannel = ({ clips, channel }) => {
    let result = [];
    clips.forEach( (clip) => {
		if (clip.broadcaster.display_name === channel || channel === "all") {
			result.push(clip);
		}
    })
	return result;
};