import { combineReducers, applyMiddleware, createStore } from "redux";
import reduxThunk from 'redux-thunk';
import { MovieReducer } from "./Reducers/MovieReducer";
import { CinemaReducer } from "./Reducers/CinemaReducer";
import { UserReducer } from "./Reducers/UserReducer";
import { TicketReducer } from "./Reducers/TicketReducer";
import { AdminReducer } from "./Reducers/AdminReducer"
const rootReducer = combineReducers({
    MovieReducer,
    CinemaReducer,
    UserReducer,
    TicketReducer,
    AdminReducer
})

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));