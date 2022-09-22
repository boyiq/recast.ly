import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  //debugger;

  //$.ajax({
  //  // This is the url you should use to communicate with the API server.
  //  url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
  //  type: 'GET',
  //  data: {q: query, youtube_api_key: YOUTUBE_API_KEY},
  //  contentType: 'application/json',
  //  success: function (data) {
  //    console.log(data);
  //    console.log('react.ly: Query sent');
  //    callback;
  //  },
  //  error: function () {
  //    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //    console.error('chatterbox: Failed to get message', data);
  //  }
  //});

  $.get( 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
  {
    q: query, youtube_api_key: YOUTUBE_API_KEY, contentType: 'application/json'})
    .done(function (data) {
      console.log(data);
      console.log('react.ly: Query sent');
      callback(data);
    });
};

//console.log(JSON.stringify("cats"));
export default searchYouTube;

