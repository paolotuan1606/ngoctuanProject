import axios from "axios";
import { ACCESSTOKEN } from "../../util/setting";


export const getTicketListApiAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: "GET",
            });
            dispatch({
                type: "GET_MOVIE_TIME_ID",
                movieTimeId: rs.data
            })
            console.log(rs.data);
        } catch (er) {
            console.log(er.response.data);
        }
    }
}

export const postChosenTicketApiAction = (data) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                method: "POST",
                data,
                headers: { 'Authorization': ' Bearer' + localStorage.getItem(ACCESSTOKEN) }
            });
            dispatch({
                type: "POST_CHOSEN_TICKET",
            })
        } catch (er) {
            console.log(er.response.data);
        }
    }
}