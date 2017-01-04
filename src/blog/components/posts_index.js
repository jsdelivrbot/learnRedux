/**
 * Created by chintan on 1/3/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render(){
        return (
            <div>
                <div className="text-right">
                    <Link to="/add" className="btn btn-primary">
                        Add Post
                    </Link>
                </div>
                List of Blog posts
            </div>
        );
    }
}
/*
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts}, dispatch);
}
*/
export default connect(null, { fetchPosts /*ES6 syntax*/})(PostsIndex);