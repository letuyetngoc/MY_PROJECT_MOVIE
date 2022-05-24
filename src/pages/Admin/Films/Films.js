import React, { useEffect } from 'react'
import './Films.scss'
import { Table } from 'antd';
import { Input, Button, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachPhimAction } from '../../../redux/actions/QuanLiRapAction';
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons'
import { history } from '../../../App';
import { XoaPhimAction } from '../../../redux/actions/QuanLiPhimAction'

const { Search } = Input;
const textXoa = <span>Xóa phim</span>;
const textSua = <span>Sửa phim</span>;
const textTaoLichChieu = <span>Tạo lịch chiếu</span>;

export default function Films() {
    const { arrFilm } = useSelector(state => state.QuanLiPhimReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LayDanhSachPhimAction())
    }, [])

    const onSearch = (value) => {
        // console.log('value', value)
        dispatch(LayDanhSachPhimAction(value))
    }
    const columns = [
        {
            key: 'maPhim',
            title: 'Mã Phim',
            dataIndex: 'maPhim',
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend'],
            width: '10%'
        },
        {
            key: 'hinhAnh',
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, film, index) => {
                return <div style={{ backgroundImage: `url(${text})`, width: '50px', height: '50px' }} className='bg-no-repeat bg-cover bg-center '>
                    <img src={film.hinhAnh} width={50} height={50} className='opacity-0' onError={(e) => (e.target.onerror = null, e.target.src = `https://picsums.photos/id/${index}/50`)} alt='...' />
                </div>
            },
            width: '10%'
        },
        {
            key: 'tenPhim',
            title: 'Tên Phim',
            dataIndex: 'tenPhim',
            defaultSortOrder: 'descend',
            sorter: (a, b) => {
                const tenPhimA = a.tenPhim.toLowerCase().trim()
                const tenPhimB = b.tenPhim.toLowerCase().trim()
                if (tenPhimA > tenPhimB) {
                    return 1
                }
                return -1
            },
            width: '20%'
        },
        {
            key: 'moTa',
            title: 'Mô tả',
            dataIndex: 'moTa',
            render: (moTa) => {
                return <span>{moTa.length > 200 ? moTa.substr(0, 200) + '...' : moTa}</span>
            },
            width: '50%'
        },
        {
            key: 'hanhDong',
            title: 'Hành động',
            render: (text, film) => {
                return <div className='flex gap-2 justify-center items '>
                    <Tooltip placement="bottom" title={textSua}>
                        <div onClick={() => history.push(`/admin/films/edit/${film.maPhim}`)}>
                            <EditOutlined className='text-indigo-600 hover:text-indigo-800 text-xl cursor-pointer' />
                        </div>
                    </Tooltip>
                    <Tooltip placement="bottom" title={textXoa}>
                        <div onClick={() => {
                            if (window.confirm(`Bạn muốn xóa phim ${film.tenPhim}?`)) {
                                dispatch(XoaPhimAction(film.maPhim))
                            }
                        }}>
                            <DeleteOutlined className='text-red-500 hover:text-red-700 text-xl cursor-pointer' />
                        </div>
                    </Tooltip>
                    <Tooltip placement="bottom" title={textTaoLichChieu}>
                        <div onClick={() => {
                            localStorage.setItem('filmsParams', JSON.stringify(film))
                            history.push(`/admin/films/showtime/${film.maPhim}`)
                        }}>
                            <CalendarOutlined className='text-indigo-600 hover:text-indigo-800 text-xl cursor-pointer' />
                        </div>
                    </Tooltip>
                </div>
            },
            width: '50%'
        },
    ];
    const data = arrFilm.map((film, index) => {
        return { ...film, key: index }
    })

    return <div className='Admin__Films'>
        <h3 className='text-2xl font-medium text-indigo-600 text-center mb-3'>Quản lí phim</h3>
        <button onClick={() => history.push('/admin/films/addnew')}
            className='bg-indigo-600 border border-indigo-600 hover:bg-indigo-800 hover:border-indigo-800 p-2 font-medium text-white rounded-md mb-2'>Thêm phim</button>
        <Search
            className='mb-2 '
            placeholder="input search user"
            enterButton
            size="large"
            onSearch={onSearch}
        />
        <div className='Admin__Films-table '>
            <Table columns={columns} dataSource={data} style={{ minWidth: '1000px' }} />
        </div>
    </div>
}