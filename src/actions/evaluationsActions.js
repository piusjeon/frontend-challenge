import {ACTION_EVALUATIONS_FETCH, ACTION_EVALUATIONS_GET} from "./types"
import {ENDPOINT_EVALUATIONS} from "../api/endpoints"
import {fetchApi} from "../api"

export const fetchEvaluations = () => dispatch => {
	console.log('action: fetching...');

	fetchApi(ENDPOINT_EVALUATIONS)
		.then(res => res.json())
		.then(data => dispatch({
			type: ACTION_EVALUATIONS_FETCH,
			payload: data
		}))
		.catch(res => {
			console.error(res)
		})
};


export const getEvaluation = (id, includePulses = false) => dispatch => {
	console.log('action: fetching...');

	const params = {};

	if (includePulses)
		params['include'] = 'pulses';

	fetchApi(ENDPOINT_EVALUATIONS + id + '/', params)
		.then(res => res.json())
		.then(data => dispatch({
			type: ACTION_EVALUATIONS_GET,
			payload: data
		}))
		.catch(res => {
			console.error(res)
		})
};