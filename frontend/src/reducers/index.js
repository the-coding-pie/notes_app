import { combineReducers } from 'redux' 
import notesReducer from './notes'
import authReducer from './auth'
import alertsReducer from './alerts'

export const rootReducer = combineReducers({
    notes: notesReducer,
    auth: authReducer,
    alerts: alertsReducer,
})
