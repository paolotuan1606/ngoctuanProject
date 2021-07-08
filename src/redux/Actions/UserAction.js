import axios from "axios";
import { bindActionCreators } from "redux";
import { history } from "../../App";
import { ACCESSTOKEN, USER_LOGIN } from "../../util/setting";

export const loginAction = (userLogin) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: userLogin
            });
            dispatch({
                type: 'CHECKING_LOGIN_SUCCESS',
                accountName: rs.data,
            });
            localStorage.setItem(USER_LOGIN, JSON.stringify(rs.data));
            localStorage.setItem(ACCESSTOKEN, rs.data);
            // export const accessToken = localStorage.getItem(ACCESSTOKEN)
            console.log(rs.data);
            alert('Đăng nhập thành công!');
            history.goBack();
        } catch (er) {
            console.log(er.response?.data);
            alert(er.response?.data)
        }
    }
}

export const signUpAction = (userLogin) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                method: 'POST',
                data: userLogin
            });
            console.log(rs);
            alert('Đăng ký thành công!')
            history.push('/');
        } catch (er) {
            console.log(er.response?.data);
            alert(`${er.response?.data}`);
        }
    }
}

export const changeInfoAction = (userLogin, accesstoken) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
                method: 'PUT',
                data: userLogin,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) },
            });
            dispatch({
                type: 'CHANGE_USER_INFO',
                accountName: rs.data
            });
            localStorage.setItem(USER_LOGIN, JSON.stringify(rs.data));
            console.log(rs.data);
            alert('Thay đổi thông tin thành công!')
            history.push('/')
        } catch (er) {
            console.log(er.response?.data);
        }
    }
}

export const getInfoAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
                method: "POST",
                data: taiKhoan,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            });
            dispatch({
                type: 'GET_INFO',
                accountName: rs.data
            })
        } catch (er) {
            console.log(er.response?.data);
        }
    }
}