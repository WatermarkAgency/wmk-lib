import React, { useState, useEffect, useRef } from "react";
import "../../../node_modules/video-react/dist/video-react.css";
import { Player, ControlBar } from "video-react";
import Loading from "../../loader/Spinner/Spinner";
import PropTypes from "prop-types";
import { wmkClass } from "../../logic";
import "./Video.css";

const Video = ({ id, className, url, poster, dimensions, Loader }) => {
  const [readyState, setReadyState] = useState(null);
  const viz = !readyState || readyState < 4 ? "hidden" : "visible";

  const playerRef = useRef()
  useEffect(() => {
    playerRef.current.subscribeToStateChange((state,prevState)=>{
      setReadyState(state.readyState)
    })
  });
  return (
    <div id={id} 
      className={wmkClass("video", "media", className)} 
      style={{position: 'relative'}}
    > 
      {/*This image sets the aspect ratio of the video*/}
      <img src={`https://via.placeholder.com/${dimensions}.jpg`} alt=""
      style={{
        width: '100%',
        maxWidth: 'none',
        visibility: 'hidden'
      }}
      />
      {!readyState || readyState < 4 ? <Loader /> : null}
        <Player
          ref={playerRef}
          style={{ visibility: viz }}
          poster={poster}
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
  );
};

export default Video;

Video.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
  poster: PropTypes.string,
  dimensions: PropTypes.string,
  Loader: PropTypes.func
};

Video.defaultProps = {
  id: "",
  url:
    "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_5MB.mp4",
  poster: "",
  dimensions: '1280x720',
  Loader: Loading
};
