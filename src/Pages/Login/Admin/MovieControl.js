import React from 'react'

export default function MovieControl() {
    return (
        <div className='container mt-3 usercontrol'>
            <div>
                <form action="">
                    <h4>Thêm phim</h4>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="form-group">
                                <label htmlFor>Tên phim</label>
                                <input type="text" name id className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Mã phim</label>
                                <input type="text" name id className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Hình ảnh</label>
                                <input type="text" name id className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Trailer</label>
                                <input type="text" name id className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Mô tả</label>
                                <textarea name id className="form-control" />
                            </div>

                        </div>
                        <div className='col-6'>
                            <div className="form-group">
                                <label htmlFor>Bí danh</label>
                                <input type="text" name id className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Mã nhóm</label>
                                <input type="text" name id className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Ngày khởi chiếu</label>
                                <input type="text" name id className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor>Đánh giá</label>
                                <input type="text" name id className="form-control" />
                            </div>
                            <div>
                                <button className='btn btn-success  btn-new'>Thêm</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div >
            <table class="table mt-3">
                <thead>
                    <tr>
                        <th>Mã nhóm</th>
                        <th>Mã phim</th>
                        <th>Tên phim</th>
                        <th>Bí danh</th>
                        <th>Hình ảnh</th>
                        <th>Ngày khởi chiếu</th>
                        <th>Trailer</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>qeqwe</td>
                        <td>qưeqwe</td>
                        <td>qưeqwe</td>
                        <td>qưeqwe</td>
                        <td>qưeqwe</td>
                        <td>qưeqwe</td>
                        <td>qưeqwe</td>
                        <td>
                            <button className='btn btn-info mr-2'>Sửa</button>
                            <button className='btn btn-danger'>Xóa</button>
                        </td>
                    </tr>

                </tbody>
            </table>


        </div >
    )
}
