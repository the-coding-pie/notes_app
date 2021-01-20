import { ADD_ALERT } from "./types"


export const addAlert = (alert) => {
    return {
        type: ADD_ALERT,
        payload: alert
    }
}