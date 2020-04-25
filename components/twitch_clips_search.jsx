import React from 'react';

import TwitchClipsIndex from './twitch_clip_index';

class TwitchClipsSearch extends React.Component {
  constructor() {
    super();
    this.state = { 
      searchTerm: 'Super Mario Bros.',
      languages: '',
      period: 'week',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChannelChange = this.handleChannelChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchTwitchClipsByGame(this.state.searchTerm);
  }

  handleChange(e) {
    //capture form change here 
    let key = e.currentTarget.name;
    this.setState({ [key]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm;
    let languages = this.state.languages;
    let period = this.state.period; 
    this.props.fetchSearchTwitchClipsByGame(searchTerm, languages, period);
  }

  handleSortChange(e) {
    e.preventDefault();
    this.props.sortClipsBy(this.props.clips, e.currentTarget.value);
  }

  handleChannelChange(e) {
    e.preventDefault();
    if (e.currentTarget.value === "all") {
      let searchTerm = this.state.searchTerm;
      let languages = this.state.languages;
      let period = this.state.period; 
      this.props.fetchSearchTwitchClipsByGame(searchTerm, languages, period);
    } else {
      this.props.filterClipsByChannel(this.props.clips, e.currentTarget.value);
    }
  }

  populateChannels() {
    let clips = this.props.clips;
    let channels = [];
    let channelsList = [];

    clips.forEach( (clip) => {
      let channel = clip.broadcaster.display_name
      
      if (!channels.includes(channel)) {
        channels.push(channel)
        channelsList.push(<option value={channel} key={clip.slug}>{channel}</option>)
      }
    })

    return channelsList;
  }

  render() {
    let { clips } = this.props;

    return (
      <div className="twitch_clip_search">
        <form className="search-bar">
          <input name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />

          <label>Sort By</label>
          <select name="sort" onChange={this.handleSortChange}>
            <option value="most-views">Most Views</option>
            <option value="least-views">Least Views</option>
            <option value="channel">Channel</option>
          </select>

          <span>Language: </span>
          <input name="languages" value={this.state.languages} onChange={this.handleChange} />

          <label>Period</label>
          <select name="period" onChange={this.handleChange}>
            <option value="week">week</option>
            <option value="day">day</option>
            <option value="month">month</option>
            <option value="all">all</option>
          </select>

          <label>Channel</label>
          <select name="channel" onChange={this.handleChannelChange}>
            <option value="all">all</option>
            { this.populateChannels()}
          </select>

          <button type="submit" onClick={this.handleSubmit}>Search Twitch</button>
        </form>
        <TwitchClipsIndex clips={clips} />
      </div>
    );
  }
}

export default TwitchClipsSearch;
