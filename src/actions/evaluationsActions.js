import {ACTION_EVALUATIONS_FETCH, ACTION_EVALUATIONS_GET, ACTION_EVALUATIONS_CREATE} from "./types"
import {ENDPOINT_EVALUATIONS} from "../api/endpoints"
import {fetchApi, postApi} from "../api"
import {ENTITY_EVALUATION} from "../entities/types";

export const fetchEvaluations = () => dispatch => {
	console.log('action fetchEvaluations: fetching...');

	return fetchApi(ENDPOINT_EVALUATIONS)
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
	console.log('action getEvaluation: fetching...');

	const params = {};

	if (includePulses)
		params['include'] = 'pulses';

	return fetchApi(ENDPOINT_EVALUATIONS + id + '/', params)
		.then(res => res.json())
		.then(data => dispatch({
			type: ACTION_EVALUATIONS_GET,
			payload: data
		}))
		.catch(res => {
			console.error(res)
		})
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
		.then(res => res.json())
		.then(data => dispatch({
			type: ACTION_EVALUATIONS_CREATE,
			payload: data
		}))
		.catch(res => {
			console.error(res)
		})

};