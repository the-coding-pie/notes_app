import axios from "axios"
import { addAlert } from "./alerts"
import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT_USER, EMPTY_NOTES, EMPTY_ALERT } from "./types"


export const loginUser = ({ email, password }) => {
    return function (dispatch) {
        const formData = new FormData()

        formData.append('email', email)
        formData.append('password', password)

        axios.post('http://localhost:8000/api/v1/users/login/', formData)
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    dispatch(addAlert({
                        type: 'success',
                        alert: 'You are now Logged In!'
                    }))
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: res.data
                    })
                }
            })
            .catch(e => {
                dispatch(addAlert({
                    type: 'error',
                    alert: e.response.data.detail
                }))
            })
    }
}

export const registerUser = ({ email, username, password }) => {
    return function (dispatch) {
        const formData = new FormData()

        formData.append('email', email)
        formData.append('username', username)
        formData.append('password', password)

        axios.post('http://localhost:8000/api/v1/users/register/', formData)
            .then(res => {
                if (res.status === 201) {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    dispatch(addAlert({
                        type: 'success',
                        alert: 'Your Account has been created!'
                    }))
                    dispatch({
                        type: REGISTER_SUCCESS,
                        payload: res.data
                    })
                }
            })
            .catch(e => {
                switch (e.response.status) {
                    case 400:
                        dispatch(addAlert({
                            type: 'error',
                            alert: e.response.data.details.email
                        }))
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

export const logoutUser = () => {
    return function (dispatch, getState) {
        axios.get('http://localhost:8000/api/v1/users/logout/', {
            headers: {
                'Authorization': `Token ${getState().auth.token}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                    dispatch(addAlert({
                        type: 'success',
                        alert: res.data.detail
                    }))
                    dispatch({
                        type: EMPTY_ALERT
                    })
                    dispatch({
                        type: EMPTY_NOTES
                    })
                    dispatch({
                        type: LOGOUT_USER
                    })
                }
            })
            .catch(e => {
                switch (e.response.status) {
                    case 401:
                        localStorage.removeItem('token')
                        localStorage.removeItem('user')
                        dispatch({
                            type: EMPTY_ALERT
                        })
                        dispatch({
                            type: EMPTY_NOTES
                        })
                        dispatch({
                            type: LOGOUT_USER
                        })
                        dispatch(addAlert({
                            type: 'error',
                            alert: e.response.data.detail
                        }))
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