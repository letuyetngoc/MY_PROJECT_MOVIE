import { Tabs, Space } from 'antd';
import { Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { HomeOutlined } from '@ant-design/icons'
import { history } from '../../App';
import { useEffect } from 'react';
import { thongTinTaiKhoanAction } from '../../redux/actions/QuanLiNguoiDungAction';
import { useFormik } from 'formik';
import { GROUP } from '../../util/settings/config';
import quanLiNguoiDung from '../../services/QuanLiNguoiDungService';
import _ from 'lodash'
import moment from 'moment';
import LoadingChildren from '../../components/Loading/LoadingChildren';

const Profile = () => {
    const dispatch = useDispatch()
    const { userLogin, thongTinTaiKhoan } = useSelector(state => state.QuanLiNguoiDungReducer)
    const { TabPane } = Tabs;

    useEffect(() => {
        dispatch(thongTinTaiKhoanAction)
    }, [])

    const operations = <div className=' mr-2 flex gap-4'>
        <a className='flex flex-column items-center'>
            <div className='py-2 px-3 bg-indigo-600 hover:text-indigo-900 rounded-full text-white text-xl font-medium'>{userLogin.taiKhoan.slice(0, 1).toUpperCase()}</div>
            <Space>
                <span className="whitespace-nowrap text-base font-medium text-gray-900 hover:text-indigo-600">
                    {userLogin.taiKhoan}
                </span>
            </Space>
        </a>
        <div onClick={() => history.push('/home')}>
            <HomeOutlined className='text-4xl text-indigo-600 hover:text-indigo-900 cursor-pointer' />
        </div>


    </div >

    return (
        <div className=' movie__profile px-2'>
            <Tabs defaultActiveKey="1" tabBarExtraContent={operations} >
                <TabPane tab={
                    <h3 className='text-center text-indigo-600 text-xl font-medium mb-2'>Thông tin cá nhân</h3>
                } key="1">
                    <ThongTinCaNhan thongTinTaiKhoan={thongTinTaiKhoan} />
                </TabPane>
                <TabPane tab={
                    <h3 className='text-center text-indigo-600 text-xl font-medium mb-2'>Lịch sử đặt vé</h3>
                } key="2">
                    <LoadingChildren />
                    {_.isEmpty(thongTinTaiKhoan.thongTinDatVe) ?
                        <p className='text-center text-gray-900 text-xl '>Bạn chưa đặt vé</p> :
                        <LichSuDatVe thongTinTaiKhoan={thongTinTaiKhoan} />}

                </TabPane>
            </Tabs>
        </div>
    )

};

export default Profile;

const ThongTinCaNhan = (props) => {
    const dispatch = useDispatch()
    const { thongTinTaiKhoan } = props

    const capNhatThongTinNguoiDungPut = (thongTinNguoiDung) => {
        return async () => {
            try {
                const result = await quanLiNguoiDung.capNhatThongTinNguoiDungPut(thongTinNguoiDung)
                alert('Cập nhật thành công!')
                // console.log('result', result)
            } catch (error) {
                console.log('error', error)
            }
        }
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: thongTinTaiKhoan.taiKhoan,
            matKhau: thongTinTaiKhoan.matKhau,
            email: thongTinTaiKhoan.email,
            soDt: thongTinTaiKhoan.soDT,
            maNhom: GROUP,
            maLoaiNguoiDung: thongTinTaiKhoan.maLoaiNguoiDung,
            hoTen: thongTinTaiKhoan.hoTen
        },
        onSubmit: values => {
            // console.log('values', values)
            dispatch(capNhatThongTinNguoiDungPut(values))

        }
    })
    const handleChange = (value) => {
        formik.setFieldValue('maLoaiNguoiDung', value)
    }

    return (
        <div>
            <h3 className='text-center text-indigo-600 text-xl font-medium mb-2'>Thông tin cá nhân</h3>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                size='default'
            >
                <Form.Item label="Tài khoản">
                    <Input name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan} />
                </Form.Item>
                <Form.Item label="Mật khẩu">
                    <Input.Password name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} />
                </Form.Item>
                <Form.Item label="Họ tên">
                    <Input name='hoTen' onChange={formik.handleChange} value={formik.values.hoTen} />
                </Form.Item>
                <Form.Item label="Email">
                    <Input name='email' onChange={formik.handleChange} value={formik.values.email} />
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <Input name='soDt' onChange={formik.handleChange} value={formik.values.soDt} />
                </Form.Item>
                <Form.Item label="Loại người dùng">
                    <Select name='maLoaiNguoiDung' onChange={handleChange} value={formik.values.maLoaiNguoiDung}>
                        <Select.Option value="KhachHang">Khách hàng</Select.Option>
                        <Select.Option value="QuanTri">Quản trị</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Button">
                    <button type="submit" className='bg-indigo-600 border border-indigo-600 hover:bg-indigo-800 hover:border-indigo-800 p-2 font-medium text-white rounded-md mb-2'>Cập nhật</button>
                </Form.Item>
            </Form>
        </div>
    );
};
const LichSuDatVe = (props) => {
    // console.log('thongtintaikhoan', props.thongTinTaiKhoan)
    const { thongTinDatVe } = props.thongTinTaiKhoan
    return (
        <>
            <h3 className='text-center text-indigo-600 text-xl font-medium mb-2'>Thông tin đặt vé</h3>
            <div className='flex justify-center'>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6 justify-center items-center mt-3'>
                    {thongTinDatVe.map((thongTin, index) => {
                        return <div key={index}
                            className=" max-w-md p-8 sm:flex sm:space-x-6 bg-gray-200 text-gray-900 rounded-md transform transition duration-500 hover:scale-105">
                            <div className=" w-28 h-40 sm:mb-0">
                                <img src={thongTin.hinhAnh} alt='' className="object-cover object-center w-28 h-40 rounded bg-gray-500" />
                            </div>
                            <div className="flex flex-col space-y-4 w-56">
                                <div>
                                    <h2 className="text-2xl font-semibold" style={{ height: '32px', overflowY: 'scroll' }}>{thongTin.tenPhim}</h2>
                                    <span className="text-sm text-gray-600">Ngày đặt: {moment(thongTin.ngayDat).format('DD/M/YYYY')}</span>
                                </div>
                                <div style={{ height: '90px', overflowY: 'scroll' }}>
                                    {thongTin.danhSachGhe.map((ghe, index) => {
                                        return <div key={index} >
                                            <h2 className="text-md">{ghe.tenHeThongRap} - {ghe.tenCumRap} - Ghế: {ghe.tenGhe}</h2>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}