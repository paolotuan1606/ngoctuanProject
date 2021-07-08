
const stateDefault = {
    accountName: null
}

export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHECKING_LOGIN_SUCCESS": {
            return { ...state, accountName: action.accountName }
        }
        case "CHANGE_USER_INFO": {
            return { ...state, accountName: action.accountName }
        }
        case "GET_INFO": {
            return { ...state, accountName: action.accountName }
        }

        default:
            return { ...state };
    }
}
