import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieTimeListApiAction } from '../../redux/Actions/MovieAction';
import { NavLink } from 'react-router-dom';

export default function Info(props) {
    const dispatch = useDispatch();
    const { movieInfo } = useSelector(state => state.MovieReducer);
    const id = props.match.params.id;
    useEffect(async () => {
        dispatch(getMovieTimeListApiAction(id))
    }, []);
    const [state, setState] = useState({
        maHeThongRap: '',
        maCumRap: '',
        lstCumRap: [],
    })
    console.log(movieInfo);

    const renderLogo = () => {
        return movieInfo.heThongRapChieu.map((logo, index) => {
            return <nav class="nav justify-content-center" key={index}>
                <NavLink class="nav-link active" to=''>
                    <img src={logo.logo} className='logo' alt="" onClick={() => {
                        setState({
                            maHeThongRap: logo.maHeThongRap,
                            lstCumRap: logo.cumRapChieu
                        })
                    }} />
                </NavLink>
            </nav>
        })
    }

    const renderCinemaList = () => {
        return state.lstCumRap.map((cinema, index) => {
            return <nav class="nav justify-content-center" key={index}>
                <NavLink class="nav-link active" to="" onClick={() => {
                    setState({
                        maCumRap: cinema.maCumRap
                    })
                }}>{cinema.tenCumRap}</NavLink>

            </nav>
        })

    }

    return (
        <div className='movie text-white '  >
            <div className='container info '>
                <div className='row pt-5  '>
                    <div className='col-8  pt-4 '>
                        <div className='row '>
                            <div className='col-4'>
                                <img src={movieInfo.hinhAnh} className='img-info' alt="" />
                            </div>
                            <div className='col-8 mt-4'>
                                <p>Ngày khởi chiếu: {movieInfo.ngayKhoiChieu}</p>
                                <h5>Tên: {movieInfo.tenPhim}</h5>
                                <p>Mô tả: {movieInfo.moTa} </p>
                                <p>Đánh giá: {movieInfo.danhGia}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 time-list'>
                    <h3 className='text-center pt-3'>Lịch Chiếu</h3>
                    <div className='row'>
                        <div className='col-2 mt-3'>
                            {renderLogo()}
                        </div>
                        <div className='col-4 mt-3 ' >
                            {renderCinemaList()}
                        </div>
                        <div className='col-6 mt-3'>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
