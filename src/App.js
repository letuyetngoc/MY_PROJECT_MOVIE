import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import News from './pages/News/News'
let history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <HomeTemplate path='/news' exact Component={News} />
        <Route path='/register' exact Component={Register} />
        <Route path='/login' exact Component={Login} />
        <HomeTemplate path='' exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
