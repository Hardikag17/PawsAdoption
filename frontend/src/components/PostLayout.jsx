import { Component } from 'react';
import Post from './Post';

class PostLayout extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  }
}

export default PostLayout;
