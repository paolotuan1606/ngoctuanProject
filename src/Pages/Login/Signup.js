import React from 'react'
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../redux/Actions/UserAction';


export default function Signup() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            hoTen: '',
            soDT: '',
            maNhom: 'GP01'
        },
        validationSchema: Yup.object().shape({
            hoTen: Yup.string().required('Tên không được bỏ trống!'),
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống!').min(1, 'mật khẩu tối thiểu 1 ký tự').max(32, 'mật khẩu tối đa 32 kí tự'),
            email: Yup.string().required('Email không được bỏ trống!').email('Email không đúng định dạng!'),
            soDT: Yup.string().required('Số điện thoại không được bỏ trống!').matches(/^[0-9]+$/),
            maNhom: Yup.string().required('Mã nhóm không được bỏ trống!'),

        }),
        onSubmit: values => {
            console.log(values);
            dispatch(signUpAction(values));


        }
    })
    return (
        <div className='login-bg'>
            <div className='sign-up container text-white '>
                <h3>Đăng ký</h3>
                <form onSubmit={formik.handleSubmit} >
                    <div className='row'>
                        <div className='col-6'>
                            <div className="form-group">
                                <label htmlFor />Tên
                                <input type="text" name='hoTen' className="form-control" onChange={formik.handleChange} />
                                {formik.touched && formik.errors.hoTen ? <p className='text-danger'>{formik.errors.hoTen}</p> : ''}
                            </div>

                            <div className="form-group">
                                <label htmlFor />Email
                                <input type="text" name='email' className="form-control" onChange={formik.handleChange} />
                                {formik.touched && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p> : ''}
                            </div>
                            <div className="form-group">
                                <label htmlFor />Số điện thoại
                                <input type="text" name='soDT' className="form-control" onChange={formik.handleChange} />
                                {formik.touched && formik.errors.soDT ? <p className='text-danger'>{formik.errors.soDT}</p> : ''}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group">
                                <label htmlFor />Tài khoản
                                <input type="text" name='taiKhoan' className="form-control" onChange={formik.handleChange} />
                                {formik.touched && formik.errors.taiKhoan ? <p className='text-danger'>{formik.errors.taiKhoan}</p> : ''}

                            </div>
                            <div className="form-group">
                                <label htmlFor />Mật khẩu
                                <input type="password" name='matKhau' className="form-control" onChange={formik.handleChange} />
                                {formik.touched && formik.errors.matKhau ? <p className='text-danger'>{formik.errors.matKhau}</p> : ''}
                            </div>
                            <div className="form-group">
                                <label htmlFor />Mã nhóm
                                <select className='form-control' onChange={formik.handleChange} name="maNhom" >
                                    <option value="">GP01</option>
                                    <option value="">GP02</option>
                                </select>
                                {formik.touched && formik.errors.maNhom ? <p className='text-danger'>{formik.errors.maNhom}</p> : ''}

                            </div>
                        </div>
                    </div>
                    <button className='btn btn-success w-100 mt-2'>Đăng ký</button>
                </form>
            </div>
        </div >
    )
}
