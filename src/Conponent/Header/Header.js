import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getInfoAction } from '../../redux/Actions/UserAction';

export default function Header() {
    const { accountName } = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();

    const renderBtn = () => {
        if (accountName.maLoaiNguoiDung === 'KhachHang') {
            return <NavLink to='/userinfo'><button className='btn' onClick={() => {
                dispatch(getInfoAction());
            }}>{accountName.taiKhoan}</button>
            </NavLink>
        } else {
            return <NavLink to='/admin'><button className='btn' onClick={() => {
                dispatch(getInfoAction());
            }}>{accountName.taiKhoan}</button></NavLink>
        }
    }

    return (
        <div className='headerHome'>
            <div>
                <div className="left">
                    <NavLink to='/'>
                        <img src="./img/logo/web-logo.png" alt='web-logo' />
                    </NavLink>
                </div>
                <div className="center">
                    <NavLink to='/'>Lịch Chiếu</NavLink>
                    <NavLink to='/'>Cụm Rạp</NavLink>
                    <NavLink to='/'>Ứng dụng</NavLink>
                </div>
                <div className="right">
                    <div className="login">
                        {accountName ?
                            renderBtn() :
                            <NavLink to='/login'><button className='btn'><img className='avatar' src="./img/icon/avatar.png" alt="" />Đăng Nhập</button></NavLink>}
                    </div>
                    <div className='select-item'>
                        <div className='img'>
                            <img src="./img/icon/location-header.png" alt="" />
                        </div>
                        <select name="" id="">
                            <option value="" >Hồ Chí Minh</option>
                            <option value="">Hà Nội</option>
                            <option value="">Đà Nẵng</option>
                            <option value="">Hải Phòng</option>
                            <option value="">Nha Trang</option>
                        </select>
                    </div>

                </div>
                <div className='response bg-light'>
                    <button className="navbar-toggler btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon " >...</span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            {accountName ?
                                renderBtn() :
                                <NavLink to='/login'><button className='btn'><img className='avatar' src="./img/icon/avatar.png" alt="" />Đăng Nhập</button></NavLink>}
                        </ul>

                    </div>
                </div>

            </div>
        </div>)
}
