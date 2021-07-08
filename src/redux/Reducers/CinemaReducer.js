const stateDefault = {
    cinemaList: [],
    cinemaLocationList: []
};

export const CinemaReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_CINEMA_LIST': {

            return { ...state, cinemaList: action.cinemaList }
        }
        case 'GET_CINEMA_LOCATION_LIST': {

            return { ...state, cinemaLocationList: action.cinemaLocationList }
        }

        default: return { ...state };
    }
}