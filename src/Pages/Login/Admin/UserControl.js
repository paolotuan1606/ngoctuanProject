import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addUserApiAction } from '../../../redux/Actions/AdminAction';

export default function UserControl() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            hoTen: '',
            email: '',
            soDT: '',
            maMhom: '',
            taiKhoan: '',
            matKhau: '',
            maLoaiNguoiDung: ''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('tài khoản không được bỏ trống!'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống!').min(1, 'mật khẩu tối thiểu 1 ký tự').max(32, 'mật khẩu tối đa 32 kí tự'), //test(/cybersoft/,'mật khẩu không đúng định dạng')
            hoTen: Yup.string().required('tên không được bỏ trống '),
            soDT: Yup.string().required('số điện thoại không được bỏ trống ').matches(/^[0-9]+$/),
            email: Yup.string().required('email không được bỏ trống ').email('email không đúng định dạng'),
            maLoaiNguoiDung: Yup.string().required('mã loại người dùng không được bỏ trống '),
            maMhom: Yup.string().required('mã nhóm không được bỏ trống '),

        }),
        onSubmit: values => {
            console.log(values);
            dispatch(addUserApiAction(values));
        }
    });
    return (
        <div className='container mt-3 usercontrol'>
            <div>
                <div className='row'>
                    <div className='col-6'>
                        <h4>Thêm người dùng</h4>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor>Tên</label>
                                <input type="text" name='hoTen' className="form-control" onChange={formik.handleChange} />
                                {formik.touched && formik.errors.hoTen ? <p className='text-danger'>{formik.errors.hoTen}</p> : ''}
                            </div>
                            <div className="form-group">
                                <label htmlFor>Email</label>
                                <input type="text" name='email' className="form-control" onChange={formik.handleChange} />
                                {formik.touched && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p> : ''}

                            </div>
                            <div className="form-group">
                                <label htmlFor>Số điện thoại</label>
                                <input type="text" name='soDT' id className="form-control" onChange={formik.handleChange} />
                                {formik.touched && formik.errors.soDT ? <p className='text-danger'>{formik.errors.soDT}</p> : ''}

                            </div>
                            <div className="form-group">
                                <label htmlFor>Mã nhóm</label>
                                <select className='form-control' name='maNhom' onChange={formik.handleChange}>
                                    <option value="">GP01</option>
                                    <option value="">GP02</option>
                                </select>
                                {formik.touched && formik.errors.maNhom ? <p className='text-danger'>{formik.errors.maNhom}</p> : ''}

                            </div>
                            <div className="form-group">
                                <label htmlFor>Tài khoản</label>
                                <input type="text" name='taiKhoan' className="form-control" onChange={formik.handleChange} />
                                {formik.touched && formik.errors.taiKhoan ? <p className='text-danger'>{formik.errors.taiKhoan}</p> : ''}

                            </div>
                            <div className="form-group">
                                <label htmlFor>Mật khẩu</label>
                                <input type="text" name='matKhau' className="form-control" onChange={formik.handleChange} />
                                {formik.touched && formik.errors.matKhau ? <p className='text-danger'>{formik.errors.matKhau}</p> : ''}

                            </div>
                            <div className="form-group">
                                <label htmlFor>Mã loại người dùng</label>
                                <select className='form-control' name='maLoaiNguoiDung' onChange={formik.handleChange}>
                                    <option value="">KhachHang</option>
                                    <option value="">QuanTri</option>
                                </select>
                                {formik.touched && formik.errors.maLoaiNguoiDung ? <p className='text-danger'>{formik.errors.maLoaiNguoiDung}</p> : ''}

                            </div>
                            <div>
                                <button type='submit' className='btn btn-success  btn-new'>Thêm</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-6'>
                        <div className='ml-5'>
                            <h4>Tìm kiếm người dùng</h4>
                            <form className="form-inline md-form mr-auto mb-4">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-dark  my-0" type="submit">Tìm</button>
                            </form>
                            <div className=''>
                                <p><span>Tài khoản : </span></p>
                                <p><span>Mật khẩu : </span></p>
                                <p><span>Tên : </span></p>
                                <p><span>Email : </span></p>
                                <p><span>Số điện thoại : </span></p>
                            </div>
                            <button className='btn btn-info mr-3'>Sửa</button>
                            <button className='btn btn-danger'>Xóa</button>
                        </div>
                    </div>
                </div>

            </div >


        </div >
    )
}
