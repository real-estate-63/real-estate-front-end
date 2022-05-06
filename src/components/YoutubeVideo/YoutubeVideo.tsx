import YouTube from 'react-youtube';

type IVideoYoutubeProps = {
  videoId: string;
};
const YoutubeVideo = (props: IVideoYoutubeProps) => {
  const { videoId } = props;
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="my-3">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YoutubeVideo;
