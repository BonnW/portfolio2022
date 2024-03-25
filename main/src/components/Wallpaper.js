import React, { Component, useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

import lofi from "../assets/lofiWallpaper.jpg";

// NEXT STEPS
// STREAM MINI YOUTUBE PLAYER IN BACKGROUND.
// VISITORS ON ARRIVAL, VIDEO PAUSED. CAN PLAY AT WILL. AND/AOR MINIMIZE

const sidebarWidth = 260;

const StyledBox = styled("div")({
  flexGrow: 1,
  backgroundImage: `url(${lofi})`,
  backgroundColor: "black",
  height: "100vh",
  width: `calc(100vw - ${sidebarWidth}px)`,
  marginLeft: `${sidebarWidth}px`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  overflowX: "hidden",
  justifyContent: "center",
  alignItems: "center",
});

const YouTubePlayer = ({ videoId }) => {
  let player;

  useEffect(() => {
    // init youtube player when component mounts
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = initilizePlayer;

    // Cleanup function to remove the youtube player when component unmounts
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const initilizePlayer = () => {
    console.log("initilizing yt player");
    player = new window.YT.Player("youtube-player", {
      height: "390",
      width: "640",
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        controls: 1,
        rel: 0,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  const onPlayerReady = (event) => {
    console.log("player ready event triggered");
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    console.log("player state change event triggered", event.data);
  };

  return (
    <div
      id="youtube-player"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    ></div>
  );
};

export default function Wallpaper() {
  return (
    <StyledBox>
      <YouTubePlayer videoId="7NOSDKb0HlU" />
    </StyledBox>
  );
}
