import React from 'react';
import OnShowing from './MovieSlide/OnShowing';
import { Link, Switch, Route } from 'react-router-dom';
import UpComing from './MovieSlide/UpComing';

export default function MovieList() {

    return (
        <div className='container movie-list' id='movieList'>
            <nav className="nav justify-content-center">
                <Link className="nav-link active" to='/'>Đang Chiếu</Link>
                <Link className="nav-link" to='/upcoming'>Sắp Chiếu</Link>
            </nav>
            <Route exact path='/' component={OnShowing} />
            <Route exact path='/' component={UpComing} />
        </div>
    )
}
