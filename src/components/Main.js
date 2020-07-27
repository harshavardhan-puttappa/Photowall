import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends Component {
  state = {
    posts: [
      {
        id: 0,
        description: "beautiful landscape",
        imageLink:
          "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
          "3919321_1443393332_n.jpg",
      },
      {
        id: 1,
        description: "Good morning",
        imageLink:
          "https://www.birthdaywishes.expert/wp-content/uploads/2015/10/cover-photo-good-morning-images.jpg",
      },
      {
        id: 2,
        description: "On a vacation!",
        imageLink:
          "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
      },
    ],
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);
  }

  removePhoto = (id) => {
    const posts = this.state.posts.filter((post) => post.id !== id);
    this.setState((state, props) => {
      return { posts };
    });
  };

  addPhoto = (newPhoto) => {
    this.setState(
      (state, props) => {
        return { posts: [...state.posts, newPhoto] };
      },
      () => {
        console.log(this.state.posts);
      }
    );
  };
  render() {
    const { posts } = this.state;
    return (
      <Router>
        <>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <Title title="Photowall" />
                  <PhotoWall posts={posts} removePhoto={this.removePhoto} />
                </>
              )}
            />
            <Route
              exact
              path="/AddPhoto"
              render={({ history }) => (
                <AddPhoto
                  addPhoto={(newPost) => {
                    this.addPhoto(newPost);
                    history.push("/");
                  }}
                />
              )}
            />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Main;
