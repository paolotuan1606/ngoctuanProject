import React from 'react';
import TixNav from '../../Conponent/TixNav/TixNav';
import PrivacyPolicy from './PP/PrivacyPolicy';
import PPContents from './PP/PPContents';


export default function TixPP() {
    return (
        <div className='row w-100'>
            <div className='col-3 '>
                <TixNav />
            </div>
            <div className='col-6 '>
                <PrivacyPolicy />
            </div>
            <div className='col-3'>
                <PPContents />
            </div>
        </div>
    )
}
