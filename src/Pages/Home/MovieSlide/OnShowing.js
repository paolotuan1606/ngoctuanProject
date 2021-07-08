import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieListApiAction } from '../../../redux/Actions/MovieAction';
import { Link } from 'react-router-dom';

export default function OnShowing() {
    const settings = {
        arrow: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        rows: 2,
    }
    const { movieList } = useSelector(state => state.MovieReducer);
    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(getMovieListApiAction('GP02'));
    }, [])

    const date = new Date();
    const time = date.toISOString();

    const renderMovieCard = () => {
        // if (movieList.ngayKhoiChieu < time) {
        return movieList.map((movie, index) => {
            return <div className='movie-card'>
                <div className="card" key={index}>
                    <img className="card-img-top" src={`${movie.hinhAnh}`} alt />
                    <Link to='/' >
                        <img className='play-img ' src="./img/icon/play-video.png" alt="" />
                    </Link>
                    <div className="card-body ">
                        <h6 className="card-title">{movie.tenPhim}</h6>
                        <div className='text-center cardbtn'>
                            <Link to={`/info/${movie.maPhim}`}>
                                <button className='btn btn-danger text-uppercase w-100'>Đặt vé</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        })
        // }
    }

    return (
        <div className='showing-list'>
            <Slider {...settings}>
                {renderMovieCard()}
            </Slider>
        </div>
    )
}
