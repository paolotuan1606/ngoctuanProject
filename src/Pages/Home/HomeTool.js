import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getMovieListApiAction, getMovieTimeListApiAction } from '../../redux/Actions/MovieAction';
import { getCinemaListApiAction } from '../../redux/Actions/CinemaAction';

export default function HomeTool() {

    const { movieList, movieTimeList } = useSelector(state => state.MovieReducer);
    // const { movieTimeList } = useSelector(state => state.MovieReducer);
    const { cinemaList } = useSelector(state => state.CinemaReducer);
    const dispatch = useDispatch();
    // let date = new Date();
    // const dateArr = [];
    // for (let i = 0; i < 10; i++) {
    //     date.setDate(date.getDate() + 1);
    //     dateArr.push(date);
    // }
    // console.log(date);
    // console.log(dateArr);
    useEffect(async () => {
        dispatch(getMovieListApiAction('GP02'));
        dispatch(getCinemaListApiAction());
        dispatch(getMovieTimeListApiAction('1344'));
    }, []);


    const renderMovieList = () => {
        return movieList.map((movie, index) => {
            return <option key={index} value={`${movie.maPhim}`}>{movie.tenPhim}</option>
        })
    }

    const renderCinemaList = () => {
        return cinemaList.map((cinema, index) => {
            return <option key={index} value={`${cinema.maHeThongRap}`}>{cinema.tenHeThongRap}</option>
        })
    }
    const renderMovieTimeList = () => {
        return movieTimeList.map((time, index) => {
            return <option key={index} value={`${time.maLichChieu}`}>{time.ngayChieuGioChieu}</option>
        })
    }


    return (
        <div className='homeTool container'>
            <div className='row'>
                <div className='col-4 form-group'>
                    <select className='form-control'>
                        <option value="" selected disabled>Phim</option>
                        {renderMovieList()}
                    </select>
                </div>
                <div className='col-2 form-group'>
                    <select className='form-control'>
                        <option value="" disabled selected>Rạp</option>
                        {renderCinemaList()}
                    </select>
                </div>
                <div className='col-2 form-group' >
                    <select className='form-control'>
                        <option value="" disabled selected>Ngày xem</option>
                        {/* {renderMovieTimeList()} */}
                    </select>
                </div>
                <div className='col-2 form-group'>
                    <select className='form-control'>
                        <option value="" disabled selected>Suất Chiếu</option>
                    </select>
                </div>
                <div className='col-2'>
                    <NavLink to=''>
                        <button className='btn btn-dark text-uppercase'>mua vé ngay</button>
                    </NavLink>

                </div>
            </div>
        </div>
    )
}
