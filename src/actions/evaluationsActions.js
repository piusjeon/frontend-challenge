import {
	ACTION_EVALUATIONS_FETCH_SUCCESS,
	ACTION_EVALUATIONS_GET_SUCCESS,
	ACTION_EVALUATIONS_CREATE_SUCCESS,
	ACTION_EVALUATIONS_FETCH_FAIL,
	ACTION_EVALUATIONS_GET_FAIL,
	ACTION_EVALUATIONS_CREATE_FAIL
} from "./types"
import {ENDPOINT_EVALUATIONS} from "../api/endpoints"
import {fetchApi, postApi} from "../api"
import {ENTITY_EVALUATION} from "../entities/types";
import {actions} from "react-redux-form";

export const fetchEvaluations = () => dispatch => {
	console.log('action fetchEvaluations: fetching...');

	return fetchApi(ENDPOINT_EVALUATIONS)
		.then(response => dispatch({
			type: ACTION_EVALUATIONS_FETCH_SUCCESS,
			payload: response
		}))
		.catch(response => dispatch({
			type: ACTION_EVALUATIONS_FETCH_FAIL,
			payload: response
		}))
};

export const getEvaluation = (id, includePulses = false) => dispatch => {
	console.log('action getEvaluation: fetching...');

	const params = {};

	if (includePulses)
		params['include'] = 'pulses';

	return fetchApi(ENDPOINT_EVALUATIONS + id + '/', params)
		.then(data => dispatch({
			type: ACTION_EVALUATIONS_GET_SUCCESS,
			payload: data
		}))
		.catch(data => dispatch({
			type: ACTION_EVALUATIONS_GET_FAIL,
			payload: data
		}))
};

export const doCreateEvaluation = (createEvaluationModel) => dispatch => {
	console.log('action submitEvaluation: submitting...');

	const postData = {
		data: {
			type: ENTITY_EVALUATION,
			attributes: {
				name: createEvaluationModel.name,
				maximum_rabi_rate: createEvaluationModel.maxRabiRate,
				polar_angle: createEvaluationModel.polarAngle
			}
		}
	};

	return postApi(ENDPOINT_EVALUATIONS, postData)
		.then(data => dispatch({
			type: ACTION_EVALUATIONS_CREATE_SUCCESS,
			payload: data
		}))
		.catch(data => dispatch({
			type: ACTION_EVALUATIONS_CREATE_FAIL,
			payload: data
		}))
};

export const resetCreateEvaluationForm = () => dispatch => {
	dispatch(actions.reset("createEvaluation"));
}