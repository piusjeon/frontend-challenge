import {ACTION_DO_NOTHING} from "./types"
import {ENDPOINT_EVALUATIONS} from "../api/endpoints"
import {fetchApi} from "../api"

export const doNothing = () => dispatch => {
	console.log('action: fetching...');
	fetchApi(ENDPOINT_EVALUATIONS)
		.then(res => res.json())
		.then(data => dispatch({
			type: ACTION_DO_NOTHING,
			payload: data
		}))
		.catch(res => {
			console.error(res)
		})
};