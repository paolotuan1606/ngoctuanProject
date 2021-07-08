import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h6>tix</h6>
                        <div className="row py-3">
                            <div className="col-sm-6 d-flex flex-column font-size">
                                <a href="#">FAQ</a>
                                <a href="#">Brand Guidelines</a>
                            </div>
                            <div className="col-sm-6 d-flex flex-column font-size">
                                <a href="#"> Thỏa thuận sử dụng </a>
                                <a href="#">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12 footer__logo">
                        <h6>đối tác</h6>
                        <div className="d-flex justify-content-sm-around py-3 ">
                            <a href="#">
                                <img src="./img/footer/bhd.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/bt.jpg" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/cgv.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/cinestar.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/cnx.jpg" alt className />
                            </a>
                        </div>
                        <div className="d-flex justify-content-sm-around py-3">
                            <a href="#">
                                <img src="./img/footer/dcine.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/dongdacinema.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/galaxycine.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/IVB.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/laban.png" alt className />
                            </a>
                        </div>
                        <div className="d-flex justify-content-sm-around py-3">
                            <a href="#">
                                <img src="./img/footer/lotter.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/megags.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/payoo.jpg" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/STARLIGHT.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/TOUCH.png" alt className />
                            </a>
                        </div>
                        <div className="d-flex justify-content-sm-around py-3">
                            <a href="#">
                                <img src="./img/footer/VCB.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/VIETTINBANK.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/zalopay_icon.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/123go.png" alt />
                            </a>
                            <a href="#">
                                <img src="./img/footer/AGRIBANK.png" alt className />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-2 text-center">
                        <h6>mobile app</h6>
                        <div className="py-3 ">
                            <a href="#"><img src="./img/icon/apple-logo.png" className='img-icon mr-3' alt="" /></a>
                            <a href="#"><img className="img-icon " src='./img/icon/android-logo.png' /></a>
                        </div>
                    </div>
                    <div className="col-sm-2 text-center">
                        <h6>social</h6>
                        <div className="py-3">
                            <a href="#"><img className=" img-icon mr-3 " src='./img/icon/facebook-logo.png' /></a>
                            <a href="#"><img className=" img-icon " src='./img/icon/zalo-logo.png' /></a>
                        </div>
                    </div>
                </div>
                <hr className="hrFooter" />
                <div className="row">
                    <div className="col-sm-1 col-xs-12 p-0">
                        <img src="./img/footer/zion-logo.jpg" alt className="rounded img-fluid" />
                    </div>
                    <div className="col-sm-9 col-xs-12 infoFooter">
                        <h6>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h6>
                        <p className="mb-0">
                            <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                        </p>
                        <p className="mb-0">
                            <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,<br />đăng ký thay đổi
                                lần&nbsp;thứ&nbsp;30,
                                ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
                                Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí Minh cấp.</span>
                        </p>
                        <p>
                            <span>Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436<br />Email: <a href="mailto:support@tix.vn" style={{ color: '#FB4226' }}>support@tix.vn</a></span>
                        </p>
                    </div>
                    <div className="col-sm-2 col-xs-12 imgFooter">
                        <a target="_blank" href="#"><img src="./img/footer/d1e6bd560daa9e20131ea8a0f62e87f8.png" className="img-fluid" /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}
