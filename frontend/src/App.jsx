import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import './styles/App.css';
import PostLayout from './components/PostLayout';
import Rout from './components/Rout';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Donate from './components/Donate';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <Router>
    <switch>
      <Route path="/" exact component={Rout}/>
      <Route path="/SignUp" component={SignUp}/>
      <Route path="/SignIn" component={SignIn}/>
      <Route path="/Donate" component={Donate}/>
    </switch>
    </Router>
  );
}

export default App;
