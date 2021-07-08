import React from 'react'
import Slider from 'react-slick'

export default function WebApp() {
    const settings = {
        arrows: false,
        infinite: true,
        autoPlay: true
    }
    return (
        <div className=' mt-5 app__Phim'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-white">Ứng dụng tiện lợi dành cho
                            người yêu điện ảnh</h1>
                        <p className="text-white">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp
                            dẫn.</p>
                        <button className="btn btn-danger btn__APP py-3 px-4 text-white font-weight-bold">App miễn phí - Tải về
                            ngay!</button>
                        <p className="text-white">TIX có hai phiên bản
                            <a target="_blank" href="#" className=" text-white"> iOS </a>
                            &amp;&nbsp;<a target="_blank" href="#" className=" text-white">Android</a>
                        </p>
                    </div>
                    <div className="col-md-6 ">
                        <div className="appphim__right">
                            <img src="./img/appphim/mobile.png" alt className="phone__Img img-fluid" />
                            <div className="slick__list">
                                <Slider {...settings}>
                                    <div className="slick__img">
                                        <img src="./img/appslide/slide10.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="slick__img">
                                        <img src="./img/appslide/slide11.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="slick__img">
                                        <img src="./img/appslide/slide12.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="slick__img">
                                        <img src="./img/appslide/slide13.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="slick__img">
                                        <img src="./img/appslide/slide14.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="slick__img">
                                        <img src="./img/appslide/slide2.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="slick__img">
                                        <img src="./img/appslide/slide8.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="slick__img">
                                        <img src="./img/appslide/slide9.jpg" alt className="img-fluid" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}
