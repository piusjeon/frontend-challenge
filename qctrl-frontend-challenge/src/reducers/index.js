import {combineReducers} from 'redux'
import NothingReducer from './NothingReducer'

const rootReducer = combineReducers({
	nothing: NothingReducer
});

export default rootReducer