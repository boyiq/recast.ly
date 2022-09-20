import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

const {useState} = React;

var App = () => {
  // console.log(Search);
  // console.log(exampleVideoData);
  // console.log(VideoList);
  // console.log(VideoListEntry);
  // console.log(VideoPlayer);

  const changeVideo = (video) => {
    setVideoPlayer(video);
  };

  const [videoPlayer, setVideoPlayer] = useState(exampleVideoData[0]);
  const [allVideos, setAllVideos] = useState(exampleVideoData);

  return (
    <div>
      <div className="col-md-6 offset-md-3">
        <Search />
      </div>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video = {videoPlayer}/>
        </div>
        <div className="col-md-5">
          <VideoList videos = {allVideos} changeVideo={changeVideo} />
        </div>
      </div>
    </div>);
};

/* <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em> view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em> view goes here</h5></div>
      </div>
    </div>
  </div>; */

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
