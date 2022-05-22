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
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Films from './pages/Admin/Films/Films';
import Showtime from './pages/Admin/Showtime/Showtime';
import Addnew from './pages/Admin/Films/AddNew/Addnew';
import Edit from './pages/Admin/Films/Edit/Edit';

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
          <UserTemplate path='/dangki' exact Component={DangKi} />
          <AdminTemplate path='/admin' exact Component={Dashboard} />
          <AdminTemplate path='/admin/users' exact Component={Dashboard} />
          <AdminTemplate path='/admin/films' exact Component={Films} />
          <AdminTemplate path='/admin/films/addnew' exact Component={Addnew} />
          <AdminTemplate path='/admin/films/edit/:id' exact Component={Edit} />
          <AdminTemplate path='/admin/showtime' exact Component={Showtime} />
          <UserTemplate path='/dangnhap' exact Component={DangNhap} />
          {/* <HomeTemplate path='/profile' exact Component={Profile} /> */}
          <HomeTemplate path='' exact Component={Phim} />
        </Switch>
      </Suspense>
    </Router >
  );
}

export default App;
