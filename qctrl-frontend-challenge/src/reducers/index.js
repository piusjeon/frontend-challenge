import {combineReducers} from 'redux'
import Evaluations from './Evaluations'
import Pages from './Pages'

const RootReducer = combineReducers({
	evaluations: Evaluations,
	pages: Pages
});

export default RootReducer