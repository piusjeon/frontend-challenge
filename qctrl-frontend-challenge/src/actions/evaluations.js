import {ACTION_EVALUATIONS_FETCH} from "./types"
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