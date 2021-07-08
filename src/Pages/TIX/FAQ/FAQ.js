import React from 'react'
import { Link } from 'react-router-dom'

export default function FAQ() {
    return (
        <div className='tix-main tab-content'>
            <h2 className='text-center text-uppercase'>faq-tix</h2>
            <div>
                <h4 className='tab-pane' id='term-1'>1. TIX là gì?</h4>
                <p>Là ứng dụng trên điện thoại thông minh và website đặt vé xem phim trực tuyến tại các rạp như BHD, Galaxy, CineStar. TIX giúp bạn mua vé trước để không phải đến rạp sớm xếp hàng mua vé, hoặc lo lắng về việc hết vé. Bên cạnh đó, TIX còn cập nhật thường xuyên các thông tin phim như trailer, tin tức, thông tin rạp, suất chiếu, các đánh giá phim, chương trình khuyến mãi từ rạp và của riêng TIX dành cho người sử dụng.</p>
                <p>Truy cập website TIX tại <Link to='/'>tix.vn</Link></p>
                <p>Ứng dụng TIX hiện có trên các hệ điều hành: iOS, Andr className='tab-pane'oid. Bạn có thể tải nhanh về điện thoại bằng cách truy cập <Link to='https://tix.vn/app/download'>tix.vn/app/download</Link></p>
            </div>
            <div>
                <h4 className='tab-pane' id='term-2'>2. Tại sao tôi không xem phim được tại TIX?</h4>
                <p>TIX gồm có ứng dụng trên điện thoại và website, là nơi giới thiệu thông tin và hỗ trợ đặt vé cho các phim chiếu tại rạp, không phải là nơi xem phim trực tuyến không bản quyền.</p>
            </div>
            <div>
                <h4 className='tab-pane' id='term-3'>3. Tôi có thể đặt giữ vé trước qua điện thoại và thanh toán sau khi nhận vé không?</h4>
                <p>TIX chỉ hỗ trợ đặt vé trực tuyến, không hỗ trợ giữ vé qua điện thoại. Bạn vui lòng chọn ghế và thanh toán trước cho vé.</p>
            </div>
            <div>
                <h4 className='tab-pane' id='term-4'>
                    4. Tôi có thể mua vé dành cho trẻ em, học sinh/sinh viên với giá ưu đãi như mua trực tiếp tại rạp không?
                </h4>
                <p>
                    TIX chỉ áp dụng duy nhất 01 loại giá vé dành cho người lớn khi mua vé trực tuyến, với các loại vé khác bạn vui lòng mua vé trực tiếp tại rạp.
                </p>
            </div>
            <div>
                <h4 className='tab-pane' id='term-5'>
                    5. Làm sao để tôi có thể đặt vé và thanh toán trực tuyến?</h4>
                <span>Để đặt vé trực tuyến, bạn vui lòng thực hiện các bước sau:</span>
                <ul>
                    <li>
                        <span>
                            Vào phần Lịch chiếu, bạn có thể chọn theo tựa phim, hoặc theo rạp chiếu.
                        </span>
                    </li>
                    <li>
                        <span>
                            Tiến hành chọn suất chiếu, ghế.                        </span>
                    </li>
                    <li>
                        <span>
                            Điền thông tin của người nhận vé, sau đó bạn chọn hình thức thanh toán phù hợp và tiến hành thanh toán trực tuyến cho vé.
                        </span>
                    </li>
                </ul>
                <span>Các hình thức thanh toán trực tuyến TIX đang áp dụng:</span>
                <ul>
                    <li>
                        <span>
                            Thanh toán qua ZaloPay                        </span>
                    </li>
                    <li>
                        <span>
                            Thanh toán qua ATM nội địa                      </span>
                    </li>
                    <li>
                        <span>
                            Thanh toán qua Visa/Master                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className='tab-pane' id='term-6'>
                    6. Mã giảm giá (e-voucher) có dùng được trên website TIX không?                </h4>
                <p>
                    Mã giảm giá chỉ có thể dùng được trên ứng dụng TIX, không thể áp dụng trên website của TIX.                </p>
            </div>
            <div>
                <h4 className='tab-pane' id='term-7'>
                    7. Làm sao để nhập mã giảm giá trên ứng dụng TIX?             </h4>
                <ul>
                    <li>
                        <span>Mở ứng dụng (app) – Chọn phim – Bấm Mua vé – Chọn suất chiếu – Chọn ghế – Thanh toán</span>
                    </li>
                    <li>
                        <span>Nhập mã code vào ô "Mã giảm giá".</span>
                    </li>
                    <li>
                        <span>Điền đầy đủ thông tin và Thanh toán.</span>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className='tab-pane' id='term-8'>
                    8. Tôi đã nhập thông tin thẻ ngân hàng nhưng vẫn không thanh toán được?              </h4>
                <p>
                    Thẻ ngân hàng bạn đang sử dụng phải được đăng ký dịch vụ thanh toán trực tuyến với ngân hàng (Internet Banking) để thực hiện thanh toán. Nếu bạn đã đăng ký dịch vụ này mà vẫn không thanh toán được, vui lòng liên hệ tổng đài 1900 545 436 để TIX kiểm tra và hỗ trợ ngay cho bạn.            </p>
            </div >
            <div>
                <h4 className='tab-pane' id='term-9'>
                    9. Sau khi đặt vé trực tuyến, làm sao để tôi có thể vào xem phim?            </h4>
                <p>
                    Ngay sau khi đặt vé trực tuyến thành công, TIX sẽ gửi mã vé qua SMS và Email mà bạn đăng ký nhận khi đặt vé. Sau đó, bạn vui lòng đến quầy dịch vụ khách hàng tại rạp, xuất trình mã vé để đổi sang vé giấy vào xem phim.</p>

                <p>   Trong trường hợp không nhận được bất kỳ thông tin mã vé nào từ TIX, bạn vui lòng liên hệ tổng đài 1900 545 436 để TIX kiểm tra và hỗ trợ ngay cho bạn.           </p>
            </div >
            <div>
                <h4 className='tab-pane' id='term-10'>
                    10. Sau khi đặt vé thành công, tôi phải tới rạp lấy vé trước giờ chiếu bao nhiêu phút?             </h4>
                <p>
                    Với vé đã được thanh toán thành công, bạn chỉ cần đến rạp trước giờ chiếu để lấy vé. Tuy nhiên, TIX khuyến khích bạn nên sắp xếp thời gian đến lấy vé sớm để tránh các tình huống ngoài dự kiến xảy ra.          </p>
            </div >
            <div>
                <h4 className='tab-pane' id='term-11'>
                    11. Tôi có thể hủy/đổi vé sau khi đã đặt vé thành công được không?
                </h4>
                <p>
                    Rất tiếc, TIX chưa hỗ trợ dịch vụ hủy hay thay đổi thông tin vé bạn đã thanh toán thành công. Trước khi thanh toán cho vé, bạn nên xác nhận lại Tên phim, Giờ chiếu và Rạp chiếu của bộ phim bạn muốn xem.                </p>
            </div >
            <div>
                <h4 className='tab-pane' id='term-12'>
                    12. Tôi đã nhận được mã vé nhưng lỡ xóa mất tin nhắn chứa mã vé, tôi phải làm sao?
                </h4>
                <p>
                    Bạn có thể kiểm tra mã vé trong Email, chụp lại màn hình có thông tin mã vé và đến quầy dịch vụ khách hàng tại rạp, xuất trình mã vé này để đổi sang vé giấy vào xem phim. Hoặc bạn có thể liên hệ tổng đài 1900 545 436 để TIX hỗ trợ xác nhận và gửi mã vé lại cho bạn.               </p>
            </div >
            <div>
                <h4 className='tab-pane' id='term-13'>
                    13. Mua vé trên TIX có thể tích điểm thành viên của các rạp không?                </h4>
                <p>
                    Hiện tại TIX đã có thể kết nối thẻ thành viên với rạp BHD và Galaxy trên ứng dụng TIX. Rất đơn giản chỉ với 3 bước sau:            </p>
                <p><span className='text-underline'>Bước 1:</span> Đăng nhập hoặc đăng ký thành viên TIX</p>
                <p><span className='text-underline'>Bước 2:</span>Vào mục tài khoản cá nhân</p>
                <p><span className='text-underline'>Bước 3:</span>Chọn mục “Thẻ thành viên của rạp BHD Star, Galaxy” và tiến hành nhập tài khoản đã đăng ký của rạp</p>
                <p>Chỉ 1 lần thực hiện duy nhất, tất cả điểm, visit của những lần mua vé sau sẽ được tự động được cập nhật.</p>
            </div >
            <div>
                <h4 className='tab-pane' id='term-14'>14. TIX có điểm thành viên không? Làm sao để có?
                </h4>
                <p>TIX có điểm thành viên, điểm này có tên gọi là <span className='text-bold'>TIX</span> . Mỗi điểm <span className='text-bold'>TIX</span> = 1000 và có thể dùng để đổi quà trên TixShop. Miễn là số <span className='text-bold'>TIX</span> không nhỏ hơn giá trị giao dịch được thực hiện.</p>
                <p><span className='text-bold'>Lưu ý:</span></p>
                <ul>
                    <li>
                        Hiện tại khi đặt vé xem phim tại app và website (www.TIX.vn) đều nhận được điểm     . Tuy nhiên khi đổi <span className='text-bold'>TIX</span>, khách hàng cần giao dịch trên <Link to='/'>app</Link>.
                    </li>
                    <li>
                        <span className='text-bold'>TIX</span> được ghi nhận theo mỗi tài khoản riêng biệt sau khi khách hàng đăng nhập tại TIX (bằng Zalo hay Facebook, Gmail). Không thể liên kết nhiều tài khoản hoặc trao đổi <span className='text-bold'>TIX</span> giữa các tài khoản.
                    </li>
                </ul>
            </div>
            <div>
                <h4 className='tab-pane' id='term-15'>
                    15. TIX có đăng bài bán bắp nước online của rạp Galaxy, tại sao trên ứng dụng TIX tôi lại không thấy?
                </h4>
                <p>Bạn vui lòng cập nhật ứng dụng TIX lên phiên bản mới nhất sẽ thấy trang chọn combo bắp nước của rạp Galaxy.</p>
            </div>
            <div>
                <h4 className='tab-pane' id='term-16'>
                    16. Tại sao điểm Tix của tôi bị trừ?                </h4>
                <p>Điểm Tix được cộng vào tài khoản của bạn cho mỗi giao dịch khi bạn thanh toán thành công trên TIX. Mỗi điểm Tix có thời hạn sử dụng là 1 năm kể từ ngày phát sinh giao dịch thành công, nếu không được sử dụng Tix sẽ bị trừ và mất đi sau 1 năm</p>
                <p>Ví dụ: Bạn mua vé vào ngày 1/1/2019 thì Tix sẽ tồn tại đến 31/12/2019</p>
            </div>
            <div>
                <h4 className='tab-pane' id='term-17'>
                    17. Làm sao để tham gia các trò chơi, cập nhật tin tức thường xuyên từ TIX?             </h4>
                <p>Các cuộc thi, giải thưởng, thông tin quà tặng, v.v từ TIX được cập nhật thường xuyên tại các trang cộng đồng của TIX.</p>
                <p>Bạn có thể tham gia vào các cộng đồng này như sau:</p>
                <ul>
                    <li>
                        Facebook: <Link to='/'>https://www.facebook.com/tix.vn</Link>
                    </li>
                    <li>
                        Instagram: <Link to='/'>https://www.instagram.com/atixbox/</Link>
                    </li>
                    <li>
                        Zalo:
                        <ul>
                            <li>
                                Cách 1: Mở app Zalo – vào Zalo page – Nhập TIX trên thanh Tìm Kiếm.
                            </li>
                            <li>
                                Cách 2: Quét mã QR code để vào Zalo page của TIX.
                            </li>
                            <img className='img' src="./img/Tix/7a5717b3506a1d021d45ef65bfed671b.png" alt="" />
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className='tab-pane' id='term-18'>18. Bình luận, đánh giá, và những nội dung khác</h4>
                <p>Khách hàng có thể đăng tải các bình luận, đánh giá và những nội dung khác; và gửi các gợi ý, ý tưởng, bình luận, câu hỏi, hoặc những loại thông tin khác nếu như những thông tin này không chứa các nội dung bất hợp pháp, đồi trụy, đe dọa, phỉ báng, xâm phạm quyền riêng tư cá nhân, xâm phạm quyền sở hữu trí tuệ, hoặc những nội dung gây hại cho bên thứ ba, hoặc những nội dung không phù hợp với thuần phong mỹ tục, và không chứa virut, nội dung vận động chính trị, nội dung mang tính thương mại, hoặc bất kỳ hình thức thư rác nào.</p>
                <p>Khi bạn đăng tải thông tin hoặc gửi các loại tài liệu cho TIX, thì TIX có toàn quyền sử dụng, sao chép, thay đổi, biên dịch, công bố, hiển thị nội dung đó cho tất cả mọi người dưới bất kỳ hình thức nào trừ trường hợp có thỏa thuận khác giữa TIX và người dùng. Đồng thời, bạn cũng cho phép TIX có quyền được sử dụng tên đi kèm với nội dung mà bạn gửi hoặc đăng tải. Bạn đảm bảo rằng bạn sở hữu và có toàn quyền sử dụng nội dung mà bạn đăng tải; rằng nội dung được đăng tải là chính xác; rằng việc sử dụng các nội dung bạn cung cấp không vi phạm Thỏa thuận sử dụng này và không gây hại cho bên thứ ba nào; và rằng bạn sẽ bồi thường cho TIX nếu như có bất kỳ khiếu kiện nào phát sinh từ những nội dung mà bạn cung cấp. TIX có quyền nhưng không phải là nghĩa vụ kiểm soát và thay đổi hoặc xóa bỏ bất kỳ nội dung nào. TIX không chịu bất kỳ trách nhiệm pháp lý nào cho những nội dung được đăng tải từ người dùng hoặc bất kỳ bên thứ 3 nào.</p>
            </div>
            <div>
                <h4 className='tab-pane' id='term-19'>19. Giá cả</h4>
                <p>Trừ phi có ghi chú khác bằng văn bản, mức giá được hiển thị cho mỗi loại sản phẩm trên TIX là mức giá bán lẻ cuối cùng của sản phẩm dựa trên thông tin từ nhà cung cấp dịch vụ.</p>
                <p>Chúng tôi không cam kết mức giá của chỗ ngồi bạn đặt sẽ không thay đổi cho đến khi bạn đặt vé. Tuy nhiên, đối với những chỗ ngồi bị sai giá, nếu như mức giá của chỗ ngồi trên thực tế cao hơn mức giá hiển thị trên TIX, thì chúng tôi sẽ liên lạc trực tiếp với bạn về vấn đề này.</p>
            </div>
        </div >
    )
}
