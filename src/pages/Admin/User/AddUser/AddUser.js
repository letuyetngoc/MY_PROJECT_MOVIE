import { Form, Input, Select } from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { themNguoiDungAction } from '../../../../redux/actions/QuanLiNguoiDungAction';
import { GROUP } from '../../../../util/settings/config';

const AddUser = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: 0,
            maNhom: GROUP,
            maLoaiNguoiDung: '',
            hoTen: ''
        },
        onSubmit: values => {
            console.log('values', values)
            dispatch(themNguoiDungAction(values))
        }
    })

    const handleChangeSelect = (value) => {
        formik.setFieldValue('maLoaiNguoiDung', value)
    }
    return (
        <div>
            <h3 className='text-center text-indigo-600 text-xl font-medium mb-2'>Thêm người dùng</h3>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                size='default'
                onSubmitCapture={formik.handleSubmit}
            >
                <Form.Item label="Tài khoản">
                    <Input onChange={formik.handleChange} name='taiKhoan' />
                </Form.Item>
                <Form.Item label="Mật khẩu">
                    <Input.Password onChange={formik.handleChange} name='matKhau' />
                </Form.Item>
                <Form.Item label="Họ tên">
                    <Input onChange={formik.handleChange} name='hoTen' />
                </Form.Item>
                <Form.Item label="Email">
                    <Input onChange={formik.handleChange} name='email' />
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <Input onChange={formik.handleChange} name='soDt' />
                </Form.Item>
                <Form.Item label="Loại người dùng">
                    <Select onChange={handleChangeSelect} name='maLoaiNguoiDung'>
                        <Select.Option value="KhachHang">Khách hàng</Select.Option>
                        <Select.Option value="QuanTri">Quản trị</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Button">
                    <button type="submit" className='bg-indigo-600 border border-indigo-600 hover:bg-indigo-800 hover:border-indigo-800 p-2 font-medium text-white rounded-md mb-2'>Thêm người dùng</button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddUser;