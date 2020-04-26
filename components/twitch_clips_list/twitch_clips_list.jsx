import React from 'react';

class TwitchClipsList extends React.Component {
  constructor() {
    super();
    this.state = { 
      ListTerm: 'Super Mario Bros.',
      languages: '',
      period: 'week'
    };
  }

  render() {
    let { clips } = this.props;

    return (
      <div className="twitch_clip_list">
          <ul className="clip_list">
                {clips.map( (clip) => <li>{clip.url},</li> )}
          </ul>
      </div>
    );
  }
}

export default TwitchClipsList;
