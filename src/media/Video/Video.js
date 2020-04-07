import React from "react";
import "../../../node_modules/video-react/dist/video-react.css";
import { Player, ControlBar } from "video-react";
import Loading from "../../loader/Spinner/Spinner";
import PropTypes from "prop-types";
import { wmkClass } from '../../index';
import "./Video.css";

class Video extends React.Component {
  state = {
    ready: null
  };
  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }
  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      //player: state,
      //currentTime: state.currentTime
      ready: state.readyState
    });
  }
  render() {
    const viz =
      !this.state.ready || this.state.ready < 4 ? "hidden" : "visible";
    const { id, className, toggle, url } = this.props;
    return (
      <div>
        {!this.state.ready || this.state.ready < 4 ? <Loading /> : null}
        <div id={id} className={wmkClass("video", "media", className)}>
          <Player
            ref={player => {
              this.player = player;
            }}
            style={{ visibility: viz }}
            //poster={this.props.video.poster.source_url}
            preload="auto"
            muted={true}
            autoPlay={true}
            loop={true}
            playsInline={true}
          >
            <source src={url} />
            <ControlBar disableCompletely={true} />
          </Player>
        </div>
      </div>
    );
  }
}

export default Video;

Video.propTypes = {
  toggle: PropTypes.bool,
  url: PropTypes.string,
  id: PropTypes.string
};

Video.defaultProps = {
  id: "",
  toggle: true,
  url:
    "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_5MB.mp4"
};
