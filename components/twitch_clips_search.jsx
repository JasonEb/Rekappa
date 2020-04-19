import React from 'react';

import TwitchClipsIndex from './twitch_clip_index';

class TwitchClipsSearch extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: 'Animal Crossing' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchTwitchClipsByGame('golden+retriever');
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearchTwitchClipsByGame(searchTerm);
  }

  render() {
    let { clips } = this.props;

    return (
      <div>
        <form className="search-bar">
          <input value={this.state.searchTerm} onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>Search Twitch</button>
        </form>
        <TwitchClipsIndex clips={clips} />
      </div>
    );
  }
}

export default TwitchClipsSearch;
