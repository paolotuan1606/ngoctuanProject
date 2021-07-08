import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCinemaListApiAction, getCinemaLocationListApiAction } from '../../redux/Actions/CinemaAction';
import { Link } from 'react-router-dom';
import { TabPanel, Tab, TabList, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MovieCardTable from './MovieCardTable';

export default function MovieTable() {

    const cinemaLocationList = useSelector(state => state.CinemaReducer.cinemaLocationList);
    const dispatch = useDispatch()


    useEffect(async () => {
        dispatch(getCinemaLocationListApiAction(``, 'GP02'));
    }, []);

    const renderLogoCinema = () => {
        return (
            <Tabs  >
                <TabList className="logoRap">
                    {cinemaLocationList.map((cinema, index) => {
                        return (
                            <Tab key={index}>
                                <img src={cinema.logo} alt={cinema.logo} style={{ width: 50 }} className="img" />
                            </Tab>
                        );
                    })}
                </TabList>
                <div >
                    {cinemaLocationList.map((cinema) => {
                        return (
                            <TabPanel key={cinema.maHeThongRap}>
                                <MovieCardTable cumRap={cinema} />
                            </TabPanel>
                        );
                    })}
                </div>

            </Tabs >
        )
    };


    // const renderCinemaLocation = () => {
    //     return lstCumRap.map((location, index) => {
    //         return <Tab className='list-group-item'>
    //             <h5>{location.tenCumRap}</h5>
    //             <p>{location.diaChi}</p>
    //         </Tab>
    //     })
    // };

    const renderMovieList = () => {
        return
    }


    return (

        <Tabs className=' mt-5' style={{ width: 1300, paddingLeft: 90 }} forceRenderTabPanel defaultIndex={1} >

            <TabList>
                {renderLogoCinema()}
            </TabList>

        </Tabs>


    )
}
