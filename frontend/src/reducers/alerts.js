import { ADD_ALERT, EMPTY_ALERT } from "../actions/types"


const initialState = {
    alerts: []
}

const alertsReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_ALERT:
            return {
                ...state,
                alerts: [action.payload]
            }
        case EMPTY_ALERT:
            return {
                ...state,
                alerts: []
            }
        default:
            return state
    }
}

export default alertsReducer