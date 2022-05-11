import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Phim from './pages/Phim/Phim'
import CumRap from './pages/CumRap/CumRap'
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
let history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/phim' exact Component={Phim} />
        <HomeTemplate path='/cumrap' exact Component={CumRap} />
        <HomeTemplate path='/chitietphim/:id' exact Component={ChiTietPhim} />
        <Route path='/dangki' exact Component={Register} />
        <Route path='/dangnhap' exact Component={Login} />
        <HomeTemplate path='' exact Component={Phim} />
      </Switch>
    </Router>
  );
}

export default App;
