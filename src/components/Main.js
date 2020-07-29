import React, { Component } from "react";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  removePhoto,
  addPhoto,
  addComment,
  startAddingPost,
  startLoadingPosts,
  startRemovingPost,
  startAddingComment,
  startLoadingComments,
} from "../actions/actions";
import Single from "./Single";

class Main extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    this.props.startLoadingPosts().then(() => {
      this.setState((state, props) => {
        return { loading: false };
      });
    });
    this.props.startLoadingComments();
  }

  render() {
    const { addPhoto, startAddingPost } = this.props;
    return (
      <Router>
        <>
          <h1>
            <Link to="/">Photowall</Link>
          </h1>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <PhotoWall
                  loading={this.state.loading}
                  {...this.props} // can send all props at once using spread operator or individually like below
                  // posts={posts}
                  // removePhoto={removePhoto}
                />
              )}
            />
            <Route
              exact
              path="/AddPhoto"
              render={({ history }) => (
                <AddPhoto
                  addPhoto={addPhoto} // can handle this either in main file or in the add photo file
                  startAddingPost={startAddingPost}
                  //  history={history}
                  // onAddPhoto={(newPost) => {
                  //   addPhoto(newPost);
                  //   history.push("/");
                  // }}
                />
              )}
            />
            {/* Sends all the this.props.match object directly to the component */}
            {/* <Route exact path="/single/:id" component={Single} /> */}
            <Route
              exact
              path="/single/:id"
              render={(params) => (
                <Single
                  {...this.props}
                  {...params}
                  loading={this.state.loading}
                />
              )} // make sure to pass params after the this.props
            />
          </Switch>
        </>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
  comments: state.commentsReducer,
});

// const mapDispatchToProps = (dispatch) => ({
//   addComment: (comment) => {
//     dispatch(addComment(comment));
//   },
// });

export default connect(mapStateToProps, {
  removePhoto,
  addPhoto,
  addComment,
  startAddingPost,
  startLoadingPosts,
  startRemovingPost,
  startAddingComment,
  startLoadingComments,
})(Main);
