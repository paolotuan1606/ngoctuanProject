import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { changeInfoAction, getInfoAction } from '../../../redux/Actions/UserAction';
import { ACCESSTOKEN, USER_LOGIN } from '../../../util/setting';

export default function UserInfo(props) {
    const { accountName } = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(getInfoAction(accountName.taiKhoan));
    })
    // const accesstoken = accountName.accessToken;
    // const obj = localStorage.getItem(USER_LOGIN);
    // console.log(accesstoken);
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            soDT: '',
            email: '',
            hoTen: '',
            maNhom: 'GP01'
        },
        validationSchema: Yup.object().shape({
            hoTen: Yup.string().required('Tên không được bỏ trống!'),
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống!').min(1, 'mật khẩu tối thiểu 1 ký tự').max(32, 'mật khẩu tối đa 32 kí tự'),
            email: Yup.string().required('Email không được bỏ trống!').email('Email không đúng định dạng!'),
            soDT: Yup.string().required('Số điện thoại không được bỏ trống!').matches(/^[0-9]+$/)
        }),
        onSubmit: values => {
            console.log(localStorage.getItem(JSON.parse(ACCESSTOKEN)));
            console.log(values);
            dispatch(changeInfoAction(values));
        }
    });

    // const submit = (data) => {
    //     formik.handleSubmit(data.target);
    // }

    return (
        <div className='container user'>
            <div className='row'>
                <div className='user-info col-6'>
                    <h3 className='text-uppercase'>Thông Tin Cá Nhân</h3>
                    <p><span className='text-bold'>Tên :</span> {accountName.hoTen}</p>
                    <p><span className='text-bold'>Email :</span> {accountName.email}</p>
                    <p><span className='text-bold'>Số điện thoại :</span> {accountName.soDT}</p>
                    <p><span className='text-bold'>Tài khoản :</span> {accountName.taiKhoan}</p>
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modelId">
                        Thay đổi thông tin
                    </button>
                </div>
                <div className='ex-history pl-5 col-6'>
                    <h3>Lịch Sử Giao Dịch</h3>
                    <div className='row mt-4'>
                        <div className='col-6 text-bold'>Rạp :</div>
                        <div className='col-6'></div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-6 text-bold'>Tên :</div>
                        <div className='col-6 text-bold'></div>
                    </div>
                    <div className='row mt-2 text-bold'>
                        <div className='col-6'>Suất Chiếu :</div>
                        <div className='col-6'></div>
                    </div>
                    <div className='row mt-2 '>
                        <div className='col-6 text-bold'>Phòng Chiếu :</div>
                        <div className='col-6'></div>
                    </div>
                    <div className='row mt-2 '>
                        <div className='col-6 text-bold'>Ghế :</div>
                        <div className='col-6'></div>
                    </div>
                    <div className='row mt-2 '>
                        <div className='col-6 text-bold'>Tổng Thanh Toán :</div>
                        <div className='col-6'></div>
                    </div>
                </div>

            </div>
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Thay đổi thông tin</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <div className="form-group">
                                        <label htmlFor /> Tên
                                        <input type="text" name='hoTen' onChange={formik.handleChange} className="form-control" />
                                        {formik.touched && formik.errors.hoTen ? <p className='text-danger'>{formik.errors.hoTen}</p> : ''}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor /> Email
                                        <input type="text" name='email' onChange={formik.handleChange} className="form-control" />
                                        {formik.touched && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p> : ''}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor /> Tài khoản
                                        <input type="text" name='taiKhoan' onChange={formik.handleChange} className="form-control" />
                                        {formik.touched && formik.errors.taiKhoan ? <p className='text-danger'>{formik.errors.taiKhoan}</p> : ''}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor /> Mật khẩu mới
                                        <input type="password" name='matKhau' onChange={formik.handleChange} className="form-control" />
                                        {formik.touched && formik.errors.matKhau ? <p className='text-danger'>{formik.errors.matKhau}</p> : ''}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor /> Số điện thoại
                                        <input type="text" name='soDT' onChange={formik.handleChange} className="form-control" />
                                        {formik.touched && formik.errors.soDT ? <p className='text-danger'>{formik.errors.soDT}</p> : ''}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Mã nhóm</label>
                                        <select className='form-control' name='maNhom' onChange={formik.handleChange} >
                                            <option value="">GP01</option>
                                            <option value="">GP02</option>
                                        </select>
                                        {formik.touched && formik.errors.maNhom ? <p className='text-danger'>{formik.errors.maNhom}</p> : ''}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Lưu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
