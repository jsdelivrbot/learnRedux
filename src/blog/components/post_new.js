/**
 * Created by chintan.
 */
import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

import {createPost} from '../actions/index';
import {Link} from 'react-router';

class AddPosts extends Component {

    // Avoid context to be used in your application as much as possible
    // React api for context is still in flux and may change in future.
    // Only use it while working with router for now
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                // blog post has been created. navigate the user to the index page
                // We navigate by calling router.push with the new route to navigate to
                this.context.router.push("/");
            });
    }
    render() {
        const {fields:{title, categories, content}, handleSubmit} = this.props;
        return (
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h3>Create a Post</h3>
                    <div className={`form-group ${title.touched && title.invalid ? 'has-error': ''}`}>
                        <label className="control-label">Title</label>
                        <input type="text" className="form-control" {...title}/>
                        <div className="help-block">
                            {title.touched ? title.error : ''}
                        </div>
                    </div>
                    <div className={`form-group ${categories.touched && categories.invalid ? 'has-error': ''}`}>
                        <label className="control-label">Categories</label>
                        <input type="text" className="form-control" {...categories}/>
                        <div className="help-block">
                            {categories.touched? categories.error : ''}
                        </div>
                    </div>
                    <div className={`form-group ${content.touched && content.invalid ? 'has-error': ''}`}>
                        <label className="control-label">Content</label>
                        <textarea className="form-control" {...content}/>
                        <div className="help-block">
                            {content.touched? content.error : ''}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
        );
    };
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a username';
    }

    if(!values.categories){
        errors.categories = 'Enter a category';
    }
    if(!values.content){
        errors.content = 'Enter some content';
    }
    return errors;
}

// For connect - First argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm - First is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'AddPostForm',
    fields: [
        'title',
        'categories',
        'content'
    ],
    validate
},
    null,
    {createPost}
)(AddPosts);