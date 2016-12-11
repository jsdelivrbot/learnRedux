/**
 * Created by chintan on 12/7/16.
 */
import React from 'react';
import VideoListItem from './video_list_item';

class VideoList extends React.Component {

    renderVideoItems() {
        return this.props.videos.map(video => {
            return (
                <VideoListItem
                    key={video.etag}
                    video={video}
                    onVideoSelected={this.props.onVideoSelect}
                />
            );
        });
    }

    render() {

        return (
            <ul className="col-md-4 list-group">
                {this.renderVideoItems()}
            </ul>
        );
    }
}

export default VideoList;