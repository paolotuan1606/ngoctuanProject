import axios from "axios";
import { ACCESSTOKEN } from "../../util/setting";

export const addUserApiAction = (data) => {
    return async () => {
        try {
            const rs = await axios({
                url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
                method: "POST",
                data,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            });

            console.log(rs.data);
            alert('Thêm người dùng thành công!')
        } catch (er) {
            console.log(er.response?.data);
        }
    }
}

export const findUserApiAction = (tukhoa) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${tukhoa} `,
                method: "GET",
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            });
            dispatch({
                type: "FIND_USER",
                user: rs.data
            })
            console.log(rs.data);

        } catch (er) {
            console.log(er.response.data);
        }
    }
}

export const changeUserApiAction = (user) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
                method: "PUT",
                data: user,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            })

            console.log(rs.data);

        } catch (er) {
            console.log(er.response?.data);
        }
    }
}

export const deleteUser = (user) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung                ',
                method: "DELETE",
                data: user,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            });

            console.log(rs.data);

        } catch (er) {
            console.log(er.response.data);
        }
    }
}

export const addMovieApiAction = (movie) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim',
                method: "POST",
                data: movie,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }

            });

            console.log(rs.data);

        } catch (er) {
            console.log(er.response.data);
        }
    }
}

export const deleteMovieApiAction = (MaPhim) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${MaPhim}
                `,
                method: "DELETE",
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            });

            console.log(rs.data);

        } catch (er) {
            console.log(er.response.data);
        }
    }
}

export const changeMovieApiAction = (movie) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim',
                method: "PUT",
                data: movie,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            });

            console.log(rs.data);

        } catch (er) {
            console.log(er.response.data);
        }
    }
}

export const upLoadImgMovieApiAction = (img) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: 'https://localhost:44370/api/QuanLyPhim/UploadHinhAnhPhim                ',
                method: "POST",
                data: img,
                headers: { "Authorization": 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            });

            console.log(rs.data);

        } catch (er) {
            console.log(er.response.data);
        }
    }
}