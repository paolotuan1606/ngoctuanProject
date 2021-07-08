import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Route } from 'react-router';
import UserControl from './UserControl';
import MovieControl from './MovieControl';
import { TabPanel, Tab, TabList, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Admin() {
    return (
        <div className='admin  container'>
            <Tabs>
                <TabList>
                    <Tab>Quản lý người dùng</Tab>
                    <Tab>Quản lý phim</Tab>
                </TabList>
                <TabPanel>
                    <UserControl />
                </TabPanel>
                <TabPanel>
                    <MovieControl />
                </TabPanel>
            </Tabs>




        </div>

    )
}
