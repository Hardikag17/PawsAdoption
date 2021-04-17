import React from 'react';
import '../styles/Post.css';
import imgPhoto from '../images/dog1.png';

const Post = () => {
  return (
    <div className='col-sm-6 col-lg-4 p-4'>
      <div className='card bg-dark text-white'>
        <img src={imgPhoto} className='card-img' alt='abc' />
        <div className='card-img-overlay h-100 d-flex flex-column justify-content-end'>
          <p className='card-text'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <b className='card-title'> Title</b>
        </div>
      </div>
    </div>
  );
};

export default Post;
