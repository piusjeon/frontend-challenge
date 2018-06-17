import {ACTION_EVALUATIONS_FETCH, ACTION_EVALUATIONS_GET, ACTION_EVALUATIONS_CREATE} from '../actions/types'
import {ENTITY_EVALUATION} from "../entities/types"
import {reduceEntityDataArray} from "../entities"

const initialState = {
	type: ENTITY_EVALUATION,
	entities: {},
	ids: []
};

const evaluationsReducer = (state = initialState, action) => {
	const newState = {
		...state
	};

	switch (action.type) {

		case ACTION_EVALUATIONS_FETCH:
			newState.entities = reduceEntityDataArray(state.entities, action.payload.data);
			newState.ids = Object.keys(newState.entities);

			return newState;

		case ACTION_EVALUATIONS_GET:
		case ACTION_EVALUATIONS_CREATE:
			newState.entities = {
				...state.entities,
				[action.payload.data.id]: action.payload.data
			};

			newState.ids = Object.keys(newState.entities);

			return newState;

		default:
			return state
	}
};

export default evaluationsReducer;