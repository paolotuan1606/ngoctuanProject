import React from 'react'
import Slider from 'react-slick'
import { NavLink } from 'react-router-dom';
import HomeTool from './HomeTool';

export default function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className='carousel'>
            <Slider {...settings}>
                <div>
                    <NavLink to=''>
                        <div className='movieShow'>
                            <img src="./img/slide/lua-deu-gap-lua-dao-16105107337344.jpg" alt="" />
                        </div>
                        <div className='btnPlay'>
                            <a href="">
                                <img src="./img/icon/play-video.png" alt="" />
                            </a>

                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink to=''>
                        <div className='movieShow'>
                            <img src="./img/slide/tazza-16137903733874.jpg" alt="" />
                        </div>
                        <div className='btnPlay'>
                            <a href="">
                                <img src="./img/icon/play-video.png" alt="" />
                            </a>

                        </div>
                    </NavLink>
                </div>
            </Slider>
            <HomeTool />
        </div>
    )
}
