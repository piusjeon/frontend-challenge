import {combineReducers} from 'redux'
import evaluations from './evaluations'
import pulses from './pulses'
import pages from './pages'

export default combineReducers({
	evaluations,
	pulses,
	pages
})