import React, { Fragment, useEffect } from 'react'
import './Films.scss'
import { Table } from 'antd';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachPhimAction } from '../../../redux/actions/QuanLiRapAction';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const { Search } = Input;

export default function Films() {
    const { arrFilm } = useSelector(state => state.QuanLiPhimReducer)
    const dispatch = useDispatch()

    console.log('arrFilm', arrFilm)

    useEffect(() => {
        dispatch(LayDanhSachPhimAction)
    }, [])
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
            render: () => {
                return <div className='flex gap-2 justify-center items '>
                    <EditOutlined className='text-indigo-600 hover:text-indigo-800 text-xl cursor-pointer' />
                    <DeleteOutlined className='text-red-500 hover:text-red-700` text-xl cursor-pointer' />
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
        <Search
            className='mb-2'
            placeholder="input search user"
            enterButton
            size="large"
        />
        <Table columns={columns} dataSource={data} />
    </div>
}