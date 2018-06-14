import {ACTION_EVALUATIONS_FETCH, ACTION_EVALUATIONS_GET} from '../actions/types'
import {ENTITY_EVALUATION} from "../entities/types"
import {reduceEntityDataArray} from "../entities"

const initialState = {
	type: ENTITY_EVALUATION,
	entities: {},
	ids: []
};

const evaluations = (state = initialState, action) => {
	const newState = {
		...state
	};

	switch (action.type) {
		case ACTION_EVALUATIONS_FETCH:
			newState.entities = reduceEntityDataArray(state.entities, action.payload.data);
			newState.ids = Object.keys(newState.entities);

			console.log('evaluations reducer: ACTION_EVALUATIONS_FETCH', state, action, newState);

			return newState;

		case ACTION_EVALUATIONS_GET:
			newState.entities = {
				...state.entities,
				[action.payload.data.id]: action.payload.data
			};

			newState.ids = Object.keys(newState.entities);

			console.log('evaluations reducer: ACTION_EVALUATIONS_GET', state, action, newState);

			return newState;

		default:
			return state
	}
};

export default evaluations;