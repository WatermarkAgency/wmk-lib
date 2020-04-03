import React from "react";
import "../../node_modules/video-react/dist/video-react.css";
import { Player, ControlBar } from "video-react";
import styled from "styled-components";
import Loading from "../loader/Spinner/Spinner";
import PropTypes from "prop-types";
import { wmkClass } from "wmk-lib";

const PlayerWrap = styled(Player)`
  .video-react .video-react-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .video-react.video-react-fluid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video-react .video-react-big-play-button {
    display: none;
  }
`;

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
      <>
        {!this.state.ready || this.state.ready < 4 ? <Loading /> : null}
        <div id={id} className={wmkClass("video", "media", className)}>
          <PlayerWrap
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
          </PlayerWrap>
        </div>
      </>
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
