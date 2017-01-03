import React, { Component } from 'react';
import _ from 'lodash';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import Config from '../../../config';
import YTSearch from 'youtube-api-search';

const API_KEY = Config.YOUTUBE_API_KEY;

// Function based component.
// Used when you just take some data and spit some JSX out
// Can have class based component

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.searchVideos('surfboards');
    }

    searchVideos(search) {
        YTSearch({key: API_KEY, term: search}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const searchVideo = _.debounce(term => {this.searchVideos(term)}, 300);
        return (
            <div>
              <SearchBar onSearchTerm = {term => searchVideo(term)} />
              <VideoDetail video={this.state.selectedVideo} />
              <VideoList
                  onVideoSelect = {selectedVideo => {this.setState({selectedVideo: selectedVideo})}}
                  videos={this.state.videos}
              />
            </div>
        );
    }

}
