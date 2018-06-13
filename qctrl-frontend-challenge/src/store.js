import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './reducers'

const middleware = [thunk];
const enhancers = [];

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

const store = createStore(
	RootReducer,
	composedEnhancers
);

export default store