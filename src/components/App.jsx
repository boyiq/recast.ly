import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

const {useState} = React;

var App = ({search}) => {
  // console.log(Search);
  // console.log(exampleVideoData);
  // console.log(VideoList);
  // console.log(VideoListEntry);
  // console.log(VideoPlayer);

  const changeVideo = (video) => {
    setVideoPlayer(video);
  };

  let timeout = null;

  const searchHandler = (event) => {

    clearTimeout(timeout);
    timeout = setTimeout(searchYouTube(event.target.value,
      ((data) => (setAllVideos(data))), 5000));
    //console.log(event.target.value);
  };

  const [videoPlayer, setVideoPlayer] = useState({
    "kind": "",
    "etag": "",
    "id": {
      "kind": "",
      "videoId": ""
    },
    "snippet": {
      "publishedAt": "",
      "channelId": "",
      "title": "",
      "description": "",
      "thumbnails": {
        "default": {
          "url": "",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "",
      "liveBroadcastContent": "",
      "publishTime": ""
    }
  });
  const [allVideos, setAllVideos] = useState([{
    "kind": "",
    "etag": "",
    "id": {
      "kind": "",
      "videoId": ""
    },
    "snippet": {
      "publishedAt": "",
      "channelId": "",
      "title": "",
      "description": "",
      "thumbnails": {
        "default": {
          "url": "",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "",
      "liveBroadcastContent": "",
      "publishTime": ""
    }
  }]);

  return (
    <div>
      <div className="col-md-6 offset-md-3">
        <Search searchHandlerProp = {(e) => { searchHandler(e); }} />
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
