import { DO_NOTHING } from '../actions/types'

const initialState = {};

const NothingReducer = (state=initialState, action) => {
	switch (action.type) {
		case DO_NOTHING:
			console.log('reducer: ', action);
			return state
		default:
			return state
	}
};

export default NothingReducer;