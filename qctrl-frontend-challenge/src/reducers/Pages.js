import { ACTION_EVALUATIONS_FETCH } from '../actions/types'
import {mapEntitiesToRelationData} from "../entities"

const initialState = {
	evaluationList: {
		data: [],
		links: {},
		meta: {}
	}
};

const Pages = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_EVALUATIONS_FETCH:
			const newState = {
				...state,
				evaluationList: {
					data: mapEntitiesToRelationData(action.payload.data),
					links: action.payload.links,
					meta: action.payload.meta,
				}
			};

			console.log('reducer: Pages', state, action, newState);
			return newState;
		default:
			return state
	}
};

export default Pages;