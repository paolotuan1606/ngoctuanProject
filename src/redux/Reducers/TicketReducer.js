const stateDefault = {
    movieTimeId: {},
}



export const TicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "GET_MOVIE_TIME_ID": {
            return { ...state, movieTimeId: action.movieTimeId }
        }



        default:
            return { ...state };
    }
}