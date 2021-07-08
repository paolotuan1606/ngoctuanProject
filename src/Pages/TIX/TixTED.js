import React from 'react'
import TixNav from '../../Conponent/TixNav/TixNav'

export default function TixTED() {
    return (
        <div className='row w-100'>
            <div className='col-3 '>
                <TixNav />
            </div>
            <div className='col-6 '>
                <FAQ />
            </div>
            <div className='col-3'>
                <FAQContents />
            </div>
        </div>
    )
}
