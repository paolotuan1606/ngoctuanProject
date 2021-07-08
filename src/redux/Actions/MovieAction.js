import axios from 'axios'

export const getMovieListApiAction = (maNhom) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom} `,
                method: 'GET'
            });
            dispatch({
                type: 'SET_MOVIE_LIST',
                movieList: rs.data,
            })
        }
        catch (er) {
            console.log(er.response.data);
        }
    }
}

export const getMovieTimeListApiAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const rs = await axios({
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            });
            dispatch({
                type: 'SET_MOVIE_TIME_LIST',
                movieInfo: rs.data
            })
        } catch (err) {
            console.log('err', err.response.data);
        }
    }
}

