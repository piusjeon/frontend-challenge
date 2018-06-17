import {combineReducers} from 'redux'
import evaluationsReducer from './evaluationsReducer'
import pulsesReducer from './pulsesReducer'
import pagesReducer from './pagesReducer'

export default combineReducers({
	evaluations: evaluationsReducer,
	pulses: pulsesReducer,
	pages: pagesReducer
})