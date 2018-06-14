import {combineReducers} from 'redux'
import evaluations from './evaluations'
import pages from './pages'

const rootReducer = combineReducers({
	evaluations: evaluations,
	pages: pages
});

export default rootReducer