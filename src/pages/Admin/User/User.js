import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { Input, Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { history } from '../../../App';
import { xoaNguoiDungAction } from '../../../redux/actions/QuanLiNguoiDungAction';
import quanLiNguoiDung from '../../../services/QuanLiNguoiDungService';

const { Search } = Input;
const textXoa = <span>Xóa người dùng</span>;
const textSua = <span>Sửa thông tin</span>;

export default function User() {
    const [arrUsers, setArrUsers] = useState([])

    const dispatch = useDispatch()

    const layDanhSachNguoiDung = (tuKhoa = '') => {
        return async () => {
            try {
                const result = await quanLiNguoiDung.layDanhSachNguoiDung(tuKhoa)
                setArrUsers(result.data.content)
            } catch (error) {
                console.log('error', error.response.data)
            }
        }
    }

    useEffect(layDanhSachNguoiDung(), [])

    const onSearch = (value) => {
        dispatch(layDanhSachNguoiDung(value))
    }
    const columns = [
        {
            key: 'STT',
            title: 'STT',
            dataIndex: 'key',
            sorter: (a, b) => a.key - b.key,
            defaultSortOrder: 'ascend',
            width: '5%'
        },
        {
            key: 'taiKhoan',
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            sorter: (a, b) => {
                const userA = a.taiKhoan.toLowerCase().trim()
                const userB = b.taiKhoan.toLowerCase().trim()
                if (userA > userB) {
                    return 1
                }
                return -1
            },
            width: '15%'
        },
        {
            key: 'maNguoiDung',
            title: 'Mã người dùng',
            dataIndex: 'maLoaiNguoiDung',
            sorter: (a, b) => {
                const userA = a.maLoaiNguoiDung.toLowerCase().trim()
                const userB = b.maLoaiNguoiDung.toLowerCase().trim()
                if (userA > userB) {
                    return 1
                }
                return -1
            },
            width: '15%'
        },
        {
            key: 'hoTen',
            title: 'Họ tên',
            dataIndex: 'hoTen',
            // defaultSortOrder: 'descend',
            sorter: (a, b) => {
                const userA = a.hoTen.toLowerCase().trim()
                const userB = b.hoTen.toLowerCase().trim()
                if (userA > userB) {
                    return 1
                }
                return -1
            },
            width: '20%'
        },
        {
            key: 'email',
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => {
                const userA = a.email.toLowerCase().trim()
                const userB = b.email.toLowerCase().trim()
                if (userA > userB) {
                    return 1
                }
                return -1
            },
            width: '20%'
        },
        {
            key: 'soDT',
            title: 'Số điện thoại',
            sorter: (a, b) => a.soDt - b.soDt,
            dataIndex: 'soDt',
            width: '15%'
        },
        {
            key: 'hanhDong',
            title: 'Hành động',
            render: (text, user) => {
                return <div className='flex gap-2 justify-center items '>
                    <Tooltip placement="bottom" title={textSua}>
                        <div onClick={() => history.push(`/admin/users/edituser/${user.taiKhoan}`)}>
                            <EditOutlined className='text-indigo-600 hover:text-indigo-800 text-xl cursor-pointer' />
                        </div>
                    </Tooltip>
                    <Tooltip placement="bottom" title={textXoa}>
                        <div onClick={() => {
                            if (window.confirm(`Bạn muốn xóa tài khoản ${user.taiKhoan}?`)) {
                                dispatch(xoaNguoiDungAction(user.taiKhoan))
                                dispatch(layDanhSachNguoiDung())
                            }
                        }}>
                            <DeleteOutlined className='text-red-500 hover:text-red-700 text-xl cursor-pointer' />
                        </div>
                    </Tooltip>
                </div>
            },
            width: '10%'
        },
    ];
    const data = arrUsers && arrUsers.map((user, index) => {
        return { ...user, key: index }
    })

    return <div className='Admin__Films'>
        <h3 className='text-2xl font-medium text-indigo-600 text-center mb-3'>Quản lí người dùng</h3>
        <button onClick={() => history.push('/admin/users/adduser')}
            className='bg-indigo-600 border border-indigo-600 hover:bg-indigo-800 hover:border-indigo-800 p-2 font-medium text-white rounded-md mb-2'>Thêm người dùng</button>
        <Search
            className='mb-2 '
            placeholder="Nhập tài khoản hoặc họ tên người dùng"
            enterButton
            size="large"
            onSearch={onSearch}
        />
        <div className='Admin__Films-table '>
            <Table columns={columns} dataSource={data} style={{ minWidth: '1000px' }} />
        </div>
    </div>
}