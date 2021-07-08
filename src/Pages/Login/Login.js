import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { loginAction } from '../../redux/Actions/UserAction';
import { useDispatch } from 'react-redux';

export default function Login(props) {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: ''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống!').min(1, 'mật khẩu tối thiểu 1 ký tự').max(32, 'mật khẩu tối đa 32 kí tự'),

        }),
        onSubmit: values => {
            console.log(values);
            dispatch(loginAction(values));
        }
    });
    // const submit = (data) => {
    //     formik.handleSubmit(data);
    // }
    console.log(props);
    return (
        <div className='login-bg'>
            <div className='login-page'>
                <h3 className='text-white'>Đăng nhập</h3>
                <form className='text-white' onSubmit={formik.handleSubmit}>
                    <div className="form-group ">
                        <label htmlFor />Tài khoản
                        <input type="text" name='taiKhoan' onChange={formik.handleChange} className="form-control" />
                        {formik.touched && formik.errors.taiKhoan ? <p className='text-danger'>{formik.errors.taiKhoan}</p> : ''}
                    </div>
                    <div className="form-group">
                        <label htmlFor />Mật khẩu
                        <input type='password' name='matKhau' onChange={formik.handleChange} className="form-control" />
                        {formik.touched && formik.errors.matKhau ? <p className='text-danger'>{formik.errors.password}</p> : ''}

                    </div>
                    <button type='submit' className='btn btn-info mt-2 w-100'>Đăng nhập</button>
                </form>
                <hr className='bg-white' />
                <NavLink to="/signup">
                    <button className='btn btn-success w-100 btn-signup'>Tạo tài khoản mới</button>
                </NavLink>
            </div>
        </div>
    )
}
