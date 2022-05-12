import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";
// import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Phim from './pages/Phim/Phim'
import CumRap from './pages/CumRap/CumRap'
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
import Checkout from './pages/Checkout/Checkout';
import DangKi from './pages/DangKi/DangKi';
import DangNhap from './pages/DangNhap/DangNhap';
import { Suspense } from 'react';
import Loading from './components/Loading/Loading';
import UserTemplate from './templates/UserTemplate/UserTemplate';

const CheckoutTemplate = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))
const HomeTemplate = lazy(() => import('./templates/HomeTemplate/HomeTemplate'))

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <HomeTemplate path='/phim' exact Component={Phim} />
          <HomeTemplate path='/cumrap' exact Component={CumRap} />
          <HomeTemplate path='/chitietphim/:id' exact Component={ChiTietPhim} />
          <CheckoutTemplate path='/checkout/:id' exact Component={Checkout} />
          <Route path='/dangki' exact component={DangKi} />
          <UserTemplate path='/dangnhap' exact Component={DangNhap} />
          <HomeTemplate path='' exact Component={Phim} />
        </Switch>
      </Suspense>
    </Router >
  );
}

export default App;
