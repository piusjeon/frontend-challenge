import {ACTION_EVALUATIONS_CREATE_SUCCESS, ACTION_EVALUATIONS_FETCH_SUCCESS} from '../actions/types'
import {mapEntitiesToRelationData, mapEntityToRelationData} from "../entities"

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

		case ACTION_EVALUATIONS_FETCH_SUCCESS:
			newState.evaluationList = {
				data: mapEntitiesToRelationData(action.payload.data),
				links: action.payload.links,
				meta: action.payload.meta,
			};

			return newState;

		case ACTION_EVALUATIONS_CREATE_SUCCESS:
			const newEvaluationRelation = mapEntityToRelationData(action.payload.data);

			newState.evaluationList = {
				...state.evaluationList,
				data:  [newEvaluationRelation, ...state.evaluationList.data]
			};

			return newState;

		default:
			return state
	}
};

export default pagesReducer;