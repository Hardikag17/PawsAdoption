import React from 'react';
import Navbar from './Navbar';
import Donate from './Donate';
import MainContent from './MainContent';
import PostLayout from './PostLayout';
import Footer from './Footer';

function Rout(){
    return (
        <div>
          <Navbar />
          <div className='App'>
            <MainContent />
            <div style={{ paddingTop: '70vh' }}>
              <center>
                <span className='dot'></span>
                <span className='dot'></span>
                <span className='dot'></span>
                <span className='dot'></span>
              </center>
            </div>
          </div>
          <PostLayout />
          <Footer/>
         
        </div>
      );
}
export default Rout;