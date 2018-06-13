import {ACTION_EVALUATIONS_FETCH} from '../actions/types'
import {ENTITY_EVALUATION} from "../entities/types"
import {reduceEntityDataArray} from "../entities"

const initialState = {
	type: ENTITY_EVALUATION,
	entities: {},
	ids: []
};

const Evaluations = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_EVALUATIONS_FETCH:

			const newEntities = reduceEntityDataArray(state.entities, action.payload.data);

			const newState = {
				...state,
				entities: newEntities,
				ids: Object.keys(newEntities)
			};

			console.log('reducer: Evaluations', state, action, newState);

			return newState;
		default:
			return state
	}
};

export default Evaluations;