import {ACTION_EVALUATIONS_GET} from '../actions/types'
import {ENTITY_PULSE} from "../entities/types"

const initialState = {
	type: ENTITY_PULSE,
	entities: {},
	ids: []
};

const pulses = (state = initialState, action) => {
	const newState = {
		...state
	};

	switch (action.type) {

		case ACTION_EVALUATIONS_GET:
			if (!action.payload.included)
				return state;

			if (action.payload.included.length === 0)
				return state;

			const payloadEntities = {};

			for (let entity of action.payload.included)
				if (entity.type === ENTITY_PULSE)
					payloadEntities[entity.id] = entity;

			if (Object.keys(payloadEntities).length === 0)
				return state;

			newState.entities = {
				...state.entities,
				...payloadEntities
			};

			newState.ids = Object.keys(newState.entities);

			return newState;

		default:
			return state
	}
};

export default pulses;