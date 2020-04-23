import React from 'react';

import TwitchClipsIndex from './twitch_clip_index';

class TwitchClipsSearch extends React.Component {
  constructor() {
    super();
    this.state = { 
      searchTerm: 'Super Mario Bros.',
      languages: 'en',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.fetchSearchTwitchClipsByGame(searchTerm, languages);
  }

  render() {
    let { clips } = this.props;

    return (
      <div className="twitch_clip_search">
        <form className="search-bar">
          <input name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
          <span>Language: </span>
          <input name="languages" value={this.state.languages} onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>Search Twitch</button>
        </form>
        <TwitchClipsIndex clips={clips} />
      </div>
    );
  }
}

export default TwitchClipsSearch;
