import { LOGIN_SUCCESS, LOGOUT_USER, REGISTER_SUCCESS } from "../actions/types"

const initialState = {
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            }
        case LOGOUT_USER:
            return {
                ...state,
                token: null,
                user: null
            }
        default:
            return state
    }
}

export default authReducer