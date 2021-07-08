import axios from "axios";

export const getCinemaListApiAction = () => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
                method: 'GET'
            });
            // console.log(rs.data);
            dispatch({
                type: 'SET_CINEMA_LIST',
                cinemaList: rs.data,
            })
        } catch (err) {
            console.log('err', err.response.data);
        }
    }
}

export const getCinemaLocationListApiAction = (maNhom) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${maNhom}`,
                method: 'GET',
            });
            dispatch({
                type: 'GET_CINEMA_LOCATION_LIST',
                cinemaLocationList: rs.data
            })
        } catch (er) {
            console.log(er.response.data);
        }
    }
}