import {DO_NOTHING} from "./types"
import fetchApi from "../utils/api"

export const doNothing = () => dispatch => {
	console.log('action: fetching...');
	fetchApi('evaluations')
		.then(res => res.json())
		.then(data => dispatch({
			type: DO_NOTHING,
			payload: data
		}))
		.catch(res => {
			console.error(res)
		})
};