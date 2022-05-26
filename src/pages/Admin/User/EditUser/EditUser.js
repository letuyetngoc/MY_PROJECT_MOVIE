import { Form, Input, Select } from 'antd';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatThongTinNguoiDungAction, layThongTinNguoiDungAction, themNguoiDungAction } from '../../../../redux/actions/QuanLiNguoiDungAction';
import { GROUP } from '../../../../util/settings/config';

const EditUser = (props) => {
    const dispatch = useDispatch()
    const { thongTinNguoiDung } = useSelector(state => state.QuanLiNguoiDungReducer)
    // console.log('thongTinNguoiDung', thongTinNguoiDung)

    useEffect(() => {
        dispatch(layThongTinNguoiDungAction(props.match.params.id))
    }, [])

    const handleChangeSelect = (value) => {
        formik.setFieldValue('maLoaiNguoiDung', value)
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: thongTinNguoiDung.taiKhoan,
            matKhau: thongTinNguoiDung.matKhau,
            email: thongTinNguoiDung.email,
            soDt: thongTinNguoiDung.soDT,
            maNhom: GROUP,
            maLoaiNguoiDung: thongTinNguoiDung.maLoaiNguoiDung,
            hoTen: thongTinNguoiDung.hoTen
        },
        onSubmit: values => {
            // console.log('values', values)
            dispatch(capNhatThongTinNguoiDungAction(values))
        }
    })

    return (
        <div>
            <h3 className='text-center text-indigo-600 text-xl font-medium mb-2'>Cập nhật thông tin</h3>
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
                    <Input name='taiKhoan' onChange={formik.handleChange} value={thongTinNguoiDung.taiKhoan} />
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
                    <Select onChange={handleChangeSelect} value={formik.values.maLoaiNguoiDung} name='maLoaiNguoiDung'>
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

export default EditUser;