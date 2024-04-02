import {
  News,
  MedalTally,
  Schedule,
  Mascot,
  Conversation,
  Sports,
  Follow,
  CompZone,
  PhotoGallery,
  Sponsors,
  TimeLeft,
} from "../sections/index";

const Content = () => {
  return (
    <div>
      <News />
      <MedalTally />
      <Schedule />
      <Mascot />
      <Conversation />
      <Sports />
      <Follow />
      <CompZone />
      <PhotoGallery />
      <Sponsors />
      <TimeLeft />
    </div>
  );
};

export default Content;
