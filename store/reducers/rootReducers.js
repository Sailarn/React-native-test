import {combineReducers} from 'redux'
import loadedReducer from './loaded'

export default combineReducers({
    loaded: loadedReducer
})