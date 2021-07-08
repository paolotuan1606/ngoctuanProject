const stateDefault = {
    movieList: [],
    movieInfo: {},

};

export const MovieReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_MOVIE_LIST': {
            return { ...state, movieList: action.movieList }
        }
        case 'SET_MOVIE_TIME_LIST': {
            return { ...state, movieInfo: action.movieInfo }
        }


        default: return { ...state };
    }
}