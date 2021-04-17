import Navbar from './Navbar';
import BannerContent from './BannerContent';
import PostLayout from './PostLayout';
import Footer from './Footer';

function Rout() {
  return (
    <div>
      <Navbar />
      <div className='App'>
        <BannerContent />
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
      <Footer />
    </div>
  );
}
export default Rout;
