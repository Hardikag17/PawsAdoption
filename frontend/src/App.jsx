import './styles/App.css';
import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Donate from './components/Donate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/SignIn' component={SignIn} />
        <Route path='/Donate' component={Donate} />
      </Switch>
    </Router>
  );
}

export default App;
