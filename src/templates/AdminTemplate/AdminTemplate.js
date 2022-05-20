import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, UserOutlined, FileOutlined } from '@ant-design/icons';
import { NavLink, Route, Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/settings/config';
import { history } from '../../App';
import { useSelector } from 'react-redux';

const { Header, Content, Sider } = Layout;

const AdminTemplate = (props) => {
  const { userLogin } = useSelector(state => state.QuanLiNguoiDungReducer)

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  if (!localStorage.getItem(USER_LOGIN)) {
    alert('Bạn không có quyền truy cập vào trang này!')
    return <Redirect to='/' />
  }

  // if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
  //   alert('Bạn không có quyền truy cập vào trang này!')
  //   return <Redirect to='/' />
  // }

  const { Component, ...restProps } = props

  return (< Route {...restProps} render={(propsRout) => {
    return <div className='movie__adminTemplate'>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo flex justify-center">
            <NavLink to="/home">
              <img
                className="h-8 w-auto sm:h-10 m-2"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </NavLink>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key='1' icon={<UserOutlined />}>
              <NavLink to='/admin/users'>Users</NavLink>
            </Menu.Item>
            <Menu.SubMenu key='2' title="Films" icon={<FileOutlined />}>
              <Menu.Item>
                <NavLink to='/admin/films'>Films</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to='/home'>Add new</NavLink>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key='3' icon={<DesktopOutlined />}>
              <NavLink to='/admin/showtime'>Showtime</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background flex items-center justify-end gap-2 " style={{ padding: 0 }}>
            {/* <NavLink to="/profile" className=" flex items-center gap-3 whitespace-nowrap text-base font-medium text-gray-900 hover:text-indigo-600"> */}
            <div className=' py-2 px-3 bg-indigo-600 hover:text-indigo-900 rounded-full text-white text-xl font-medium'>A</div>
            <div>Admin</div>
            {/* </NavLink> */}
            <div className='text-indigo-600 hover:text-indigo-900 cursor-pointer mr-2'
              onClick={() => {
                localStorage.removeItem(USER_LOGIN)
                localStorage.removeItem(ACCESS_TOKEN)
                history.push('/home')
                window.location.reload()
              }}
            >| Đăng xuất</div>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Component {...propsRout} />
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    </div >
  }} />
  )
}
export default AdminTemplate