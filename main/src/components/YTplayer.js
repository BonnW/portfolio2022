import React, { useEffect } from 'react';

const youtubePlayer = ({ videoId }) => {
  let player;

  useEffect(() => {
    // init youtube player when component mounts
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = initilizePlayer;

    // Cleanup function to remove the youtube player when component unmounts
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const initilizePlayer = () => {};
};
