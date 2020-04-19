export const searchTwitchClipsByLoginName = loginName => {

    let headers = { 'Client-ID': 'l622tc0oqzk3cso09retwcmw8rixl7',
    'Accept': 'application/vnd.twitchtv.v5+json' }

    return $.ajax({
      method: 'GET',
      url: `https://api.twitch.tv/helix/users?login=${loginName}`,
      headers: headers
    })
};

export const fetchGameClips = (game, period='week', languages="", limit=100, cursor="") => {
    let langOptions = languages === "" ? "" : "&language=" + languages.trim().split("|").join(",")
    let cursorOption = cursor.length === 0 ? "" : `&cursor=${cursor}`
    let url = `https://api.twitch.tv/kraken/clips/top?game=${game}&limit=${limit}&period=${period}${langOptions}${cursorOption}`
    let headers = { 'Client-ID': 'l622tc0oqzk3cso09retwcmw8rixl7',
                'Accept': 'application/vnd.twitchtv.v5+json' }
                
    return $.ajax({
        method: 'GET',
        url: url,
        headers: headers
    })
}