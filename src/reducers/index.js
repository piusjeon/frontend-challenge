import {combineReducers} from 'redux'
import {createForms} from 'react-redux-form'
import evaluationsReducer from './evaluationsReducer'
import pulsesReducer from './pulsesReducer'
import pagesReducer from './pagesReducer'
import formsReducer from './forms'

export default combineReducers({
	evaluations: evaluationsReducer,
	pulses: pulsesReducer,
	pages: pagesReducer,
	...createForms(formsReducer)
})