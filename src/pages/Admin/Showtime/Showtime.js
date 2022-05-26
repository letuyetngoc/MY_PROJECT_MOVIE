import { Select, DatePicker, Form, InputNumber, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import quanLiRapService from '../../../services/QuanLiRapService';
import moment from 'moment'
import quanLiDatVe from '../../../services/QuanLiDatVeService';

const Showtime = (props) => {
    const [state, setState] = useState({
        heThongRap: [],
        heThongCumRap: []
    })

    useEffect(async () => {
        try {
            const result = await quanLiRapService.LayThongTinHeThongRap()
            setState({
                ...state,
                heThongRap: result.data.content
            })
        } catch (error) {
            console.log('error', error)
        }
    }, [])
    let filmParams = {}
    filmParams = JSON.parse(localStorage.getItem('filmsParams'))
    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: 0
        },
        onSubmit: async (values) => {
            try {
                const result = await quanLiDatVe.TaoLichChieu(values)
                alert('Tạo lịch chiếu thành công!')
                console.log('result', result.data.content)

            } catch (error) {
                console.log('error', error.response?.data)
            }
        }
    })

    const onChange = (values) => {
        console.log('ngaychieugiochieu', moment(values).format('DD/MM/YYYY hh:mm:ss'))
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'))
    };

    const handleChangeHeThongRap = async (value) => {
        try {
            const result = await quanLiRapService.LayThongTinCumRapTheoHeThong(value)
            setState({
                ...state,
                heThongCumRap: result.data.content
            })
        } catch (error) {
            console.log('error', error.response.data)
        }

    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='flex flex-col items-center '>
                <h3 className=' text-xl font-medium text-indigo-600 mb-2'>Phim: {filmParams.tenPhim}</h3>
                <img src={filmParams.hinhAnh} width={200} height={400} alt=''
                    onError={(e) => (e.target.onerror = null, e.target.src = 'https://picsum.photos/200/400')}
                />
            </div>
            <div className=''>
                <Form
                    onSubmitCapture={formik.handleSubmit}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                >
                    <Form.Item label="Hệ thống rạp">
                        <Select
                            onChange={handleChangeHeThongRap}
                            placeholder='Chọn hệ thống rạp'
                            options={state.heThongRap.map((rap, index) => ({
                                value: rap.maHeThongRap,
                                label: rap.maHeThongRap,
                            }))}
                        />
                    </Form.Item>
                    <Form.Item label="Cụm rạp">
                        <Select
                            placeholder='Chọn cụm rạp'
                            onChange={(value) => {
                                formik.setFieldValue('maRap', value)
                            }}
                            options={state.heThongCumRap.map((cumRap, index) => ({
                                value: cumRap.maCumRap,
                                label: cumRap.tenCumRap,
                            }))}
                        />
                    </Form.Item>
                    <Form.Item label="Thời gian">
                        <Space direction="vertical" size={12}>
                            <DatePicker placeholder='chọn ngày, giờ chiếu' showTime onChange={onChange} />
                        </Space>
                    </Form.Item>
                    <Form.Item label="Giá vé" >
                        <InputNumber min={75000} max={150000} onChange={value => formik.setFieldValue('giaVe', value)} />
                    </Form.Item>
                    <Form.Item label="Button">
                        <button type='submit' className='bg-indigo-600 border border-indigo-600 hover:bg-indigo-800 hover:border-indigo-800 p-2 font-medium text-white rounded-md mb-2'>Tạo lịch chiếu</button>
                    </Form.Item>
                </Form >
            </div>

        </div>
    );
};

export default Showtime;