import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './styles/App.css';
import PostLayout from './components/PostLayout';

function App() {
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
      <Footer />
    </div>
  );
}

export default App;
