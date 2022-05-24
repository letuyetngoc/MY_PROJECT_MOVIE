import React, { useState, useEffect } from 'react';
import './AddNew.scss'
import { useFormik } from 'formik';
import { GROUP } from '../../../../util/settings/config'
import moment from 'moment'
import { Form, Input, DatePicker, InputNumber, Switch, } from 'antd';
import { ThemPhimUploadHinhAction } from '../../../../redux/actions/QuanLiPhimAction';
import { useDispatch } from 'react-redux';

const Addnew = () => {
    const dispatch = useDispatch()
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('')


    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            // moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            // hinhAnh: {}
        },
        onSubmit: (values) => {
            // console.log('values', values);
            values.maNhom = GROUP;
            //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name);
                }
            }
            //Gọi api gửi các giá trị formdata về backend xử lý
            dispatch(ThemPhimUploadHinhAction(formData));

        }
    })
    const handleChangeSwitch = (name) => {
        return value => formik.setFieldValue(name, value)
    }
    const handleChangeFile = (e) => {
        let file = e.target.files[0]
        // console.log(file)
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = e => {
                setImgSrc(e.target.result)
            }
            formik.setFieldValue('hinhAnh', file)
        }
    }
    return (
        <div className='Admin_Films_Addnew'>
            <h3 className='text-center text-indigo-600 text-xl font-medium mb-2'>Thêm phim mới</h3>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item label="Tên Phim">
                    <Input name='tenPhim' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name='trailer' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name='moTa' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format='DD/MM/YYYY' onChange={(values) => formik.setFieldValue('ngayKhoiChieu', moment(values).format('DD/MM/YYYY'))} />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('dangChieu')} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('sapChieu')} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('hot')} />
                </Form.Item>
                <Form.Item label="Đánh giá">
                    <InputNumber onChange={value => formik.setFieldValue('danhGia', value)} min={0} max={10} defaultValue={0} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type='file' onChange={handleChangeFile} />
                    <br />
                    <img src={imgSrc} style={{ width: '150px', height: '150px' }} alt='...' />
                </Form.Item>
                <Form.Item label="Button">
                    <button type="submit" className='bg-indigo-600 border border-indigo-600 hover:bg-indigo-800 hover:border-indigo-800 p-2 font-medium text-white rounded-md mb-2'>Thêm phim</button>
                </Form.Item>
            </Form>
        </div >
    );
};

export default Addnew;