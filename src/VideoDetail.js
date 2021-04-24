import React from "react";
import he from "he";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{he.decode(video.snippet.title)}</h4>
        <p>{he.decode(video.snippet.description)}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
