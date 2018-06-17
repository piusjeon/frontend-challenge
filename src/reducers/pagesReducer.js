import {ACTION_EVALUATIONS_FETCH} from '../actions/types'
import {mapEntitiesToRelationData} from "../entities"

const initialState = {
	evaluationList: {
		data: [],
		links: null,
		meta: null
	}
};

const pagesReducer = (state = initialState, action) => {
	const newState = {
		...state
	};
	switch (action.type) {

		case ACTION_EVALUATIONS_FETCH:
			newState.evaluationList = {
				data: mapEntitiesToRelationData(action.payload.data),
				links: action.payload.links,
				meta: action.payload.meta,
			};

			return newState;

		default:
			return state
	}
};

export default pagesReducer;