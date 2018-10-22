import * as React from 'react';
import YouTube from 'react-youtube';

interface Props {

}

export default class App extends React.Component {

  state = {
    opts: {
      height: '768',
      width: '1024',
      counter: 0,
      playerVars: {
        autoplay: 1,
        start: 61,
      }
    }
  }

  render() {
    const { opts } = this.state;
    return (
        <YouTube
          videoId="gH476CxJxfg"
          opts={opts}
          onPlay={this.onPlay}
        />
    );
  }

  onPlay = event => {
    setTimeout(() => {
      event.target.seekTo(61)
    }, 13500);
  }

}