import axios from "axios"
import { addAlert } from "./alerts"
import { logoutUser } from "./auth"
import { NOTE_ADDED, DELETE_NOTE, NOTES_LOADED } from "./types"

export const addNote = ({ title, desc }) => {
    return function (dispatch, getState) {
        const formData = new FormData()

        formData.append('title', title)
        formData.append('desc', desc)
        
        axios.post(`http://localhost:8000/api/v1/notes/`, formData, {
            headers: {
                'Authorization': `Token ${getState().auth.token}`
            }
        })
            .then(res => {
                if (res.status === 201) {
                    dispatch(addAlert({
                        type: 'success',
                        alert: 'Note Created!'
                    }))
                    dispatch({
                        type: NOTE_ADDED,
                        payload: res.data.note
                    })
                }
            })
            .catch(e => {
                switch(e.response.status) {
                    case 401:
                        dispatch(logoutUser())
                        break
                    default:
                        dispatch(addAlert({
                            type: 'error',
                            alert: e.response.data.detail
                        }))
                }
            })
    }
}

export const deleteNote = (id) => {
    return function (dispatch, getState) {
        axios.delete(`http://localhost:8000/api/v1/notes/${id}/`, {
            headers: {
                'Authorization': `Token ${getState().auth.token}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: DELETE_NOTE,
                        payload: id
                    })
                    dispatch(addAlert({
                        type: 'success',
                        alert: res.data.detail
                    }))
                }
            })
            .catch(e => {
                switch(e.response.status) {
                    case 401:
                        dispatch(logoutUser())
                        break
                    default:
                        dispatch(addAlert({
                            type: 'error',
                            alert: e.response.data.detail
                        }))
                }
            })
    }
}

export const getNotes = () => {
    return function (dispatch, getState) {
        axios.get('http://localhost:8000/api/v1/notes/', {
            headers: {
                'Authorization': `Token ${getState().auth.token}`
            }
        })
            .then(res => {
                dispatch({
                    type: NOTES_LOADED,
                    payload: res.data.notes
                })
            })
            .catch(e => {
                switch(e.response.status) {
                    case 401:
                        dispatch(logoutUser())
                        break
                    default:
                        dispatch(addAlert({
                            type: 'error',
                            alert: e.response.data.detail
                        }))
                }
            })
    }
}