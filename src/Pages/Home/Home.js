import React from 'react'
import Header from '../../Conponent/Header/Header';
import Footer from '../../Conponent/Footer/Footer';
import WebApp from './WebApp';
import Carousel from './Carousel';
import MovieList from './MovieList';
import MovieTable from './MovieTable';
import { Route } from 'react-router';



export default function Home() {

    return (
        <div>
            <Header />
            <Carousel />
            {/* <MovieList />
            <MovieTable /> */}

            <Route exact path='/' component={MovieList} />
            <Route exact path='/' component={MovieTable} />
            <WebApp />
            <Footer />


        </div>
    )
}
