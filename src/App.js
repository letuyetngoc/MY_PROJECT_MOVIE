import React, { lazy } from 'react'
import { Router, Switch } from 'react-router-dom'
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
// import UserTemplate from './templates/UserTemplate/UserTemplate';
// import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Films from './pages/Admin/Films/Films';
import Showtime from './pages/Admin/Showtime/Showtime';
import Addnew from './pages/Admin/Films/AddNew/Addnew';
import Edit from './pages/Admin/Films/Edit/Edit';
import User from './pages/Admin/User/User';
import AddUser from './pages/Admin/User/AddUser/AddUser';
import EditUser from './pages/Admin/User/EditUser/EditUser';
import Profile from './pages/Profile/Profile';

const CheckoutTemplate = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))
const HomeTemplate = lazy(() => import('./templates/HomeTemplate/HomeTemplate'))
const UserTemplate = lazy(() => import('./templates/UserTemplate/UserTemplate'))
const AdminTemplate = lazy(() => import('./templates/AdminTemplate/AdminTemplate'))

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
          <AdminTemplate path='/admin' exact Component={User} />
          <AdminTemplate path='/admin/films' exact Component={Films} />
          <AdminTemplate path='/admin/films/addnew' exact Component={Addnew} />
          <AdminTemplate path='/admin/films/showtime/:id' exact Component={Showtime} />
          <AdminTemplate path='/admin/films/edit/:id' exact Component={Edit} />
          <AdminTemplate path='/admin/users' exact Component={User} />
          <AdminTemplate path='/admin/users/adduser' exact Component={AddUser} />
          <AdminTemplate path='/admin/users/edituser/:id' exact Component={EditUser} />
          <UserTemplate path='/dangnhap' exact Component={DangNhap} />
          <CheckoutTemplate path='/profile' exact Component={Profile} />
          <HomeTemplate path='' exact Component={Phim} />
        </Switch>
      </Suspense>
    </Router >
  );
}

export default App;
