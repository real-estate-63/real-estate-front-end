import YoutubeVideo from '@/components/YoutubeVideo/YoutubeVideo';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { IVideoType } from '@/types/video';

const DUMPS_VIDEO: IVideoType[] = [
  { title: 'HUYET NGAI BAO THU', videoId: 'B4-Kn0IMetU', slugName: 'youtube' },
  {
    title: 'OAN HỒN NƠI MIẾU HOANG',
    videoId: 'hNiBoihzzQU',
    slugName: 'youtube',
  },
  { title: 'HUYET NGAI BAO THU', videoId: 'B4-Kn0IMetU', slugName: 'youtube' },
];

const Video = () => (
  <Main
    meta={
      <Meta title="Video most view" description="most view content by user" />
    }
  >
    <h1>Video Page</h1>

    {DUMPS_VIDEO.map((video: IVideoType) => (
      <YoutubeVideo key={video.videoId} videoId={video.videoId} />
    ))}
  </Main>
);

export default Video;
