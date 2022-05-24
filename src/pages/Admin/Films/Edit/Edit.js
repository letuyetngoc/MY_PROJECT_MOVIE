import React, { useEffect, useState } from 'react';
import '../AddNew/AddNew.scss'
import { useFormik } from 'formik';
import { GROUP } from '../../../../util/settings/config'
import moment from 'moment'
import { Form, Input, DatePicker, InputNumber, Switch, } from 'antd';
import { CapNhatPhimUploadAction, LayThongTinPhimAction, } from '../../../../redux/actions/QuanLiPhimAction';
import { useDispatch, useSelector } from 'react-redux';

const Edit = (props) => {
    const dispatch = useDispatch()
    const { thongTinPhim } = useSelector(state => state.QuanLiPhimReducer)
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('')

    useEffect(() => {
        let { id } = props.match.params
        dispatch(LayThongTinPhimAction(id))
    }, [])

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: thongTinPhim.maPhim,
            tenPhim: thongTinPhim.tenPhim,
            trailer: thongTinPhim.trailer,
            moTa: thongTinPhim.moTa,
            ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
            dangChieu: thongTinPhim.dangChieu,
            sapChieu: thongTinPhim.sapChieu,
            hot: thongTinPhim.hot,
            danhGia: thongTinPhim.danhGia,
            hinhAnh: null
        },
        onSubmit: (values) => {
            // console.log('values', values);
            values.maNhom = GROUP;
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append('File', values.hinhAnh, values.hinhAnh.name);
                    }
                }
            }
            dispatch(CapNhatPhimUploadAction(formData))
        }
    })

    const handleChangeSwitch = (name) => {
        return value => formik.setFieldValue(name, value)
    }

    const handleChangeFile = async (e) => {
        let file = e.target.files[0]
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
            await formik.setFieldValue('hinhAnh', file)
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = e => {
                setImgSrc(e.target.result)
            }
        }
    }
    return (
        <div className='Admin_Films_Addnew'>
            <h3 className='text-center text-indigo-600 text-xl font-medium mb-2'>Cập nhật phim</h3>
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
                    <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format='DD/MM/YYYY'
                        onChange={(values) => formik.setFieldValue('ngayKhoiChieu', moment(values))}
                        value={moment(formik.values.ngayKhoiChieu)}
                    />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
                </Form.Item>
                <Form.Item label="Đánh giá">
                    <InputNumber onChange={value => formik.setFieldValue('danhGia', value)} min={0} max={10} value={formik.values.danhGia} defaultValue={0} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type='file' onChange={handleChangeFile} />
                    <br />
                    <img src={imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} style={{ width: '150px', height: '150px' }} alt='...' />
                </Form.Item>
                <Form.Item label="Button">
                    <button type="submit" className='bg-indigo-600 border border-indigo-600 hover:bg-indigo-800 hover:border-indigo-800 p-2 font-medium text-white rounded-md mb-2'>Cập nhật</button>
                </Form.Item>
            </Form>
        </div >
    );
};

export default Edit;