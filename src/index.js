import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'sample_key';

// Function based component.
// Used when you just take some data and spit some JSX out
// Can have class based component

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            searchTerm: 'surfboards'
        };

        this.searchVideos(this.state.searchTerm);
    }

    searchVideos(search) {
        YTSearch({key: API_KEY, term: search}, (videos) => {
            this.setState({videos});
        });
    }

    searchTermChanged(term) {

        this.searchVideos(term);
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTerm = {term => {this.searchTermChanged(term)}} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect = {selectedVideo => {this.setState({selectedVideo: selectedVideo})}}
                    videos={this.state.videos}
                />
            </div>
        );
    }

};

ReactDOM.render(<App/>, document.querySelector('.container'));
