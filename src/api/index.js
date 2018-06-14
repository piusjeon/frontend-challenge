import {isEmpty} from "../utils/objects";

export const API_ROOT = 'http://q-ctrl-api.appspot.com';

const defaultHeaders = {
	'Content-Type': 'application/vnd.api+json'
};

const mapParamsToQueryString = params => {
	let queryString = '';

	if (!isEmpty(params)) {
		queryString += '?';

		for (let param of Object.entries(params))
			queryString += param + '=' + encodeURIComponent(params[param])
	}

	return queryString
};

export const fetchApi = (path, params = {}, init = {}) => {
	let url = API_ROOT + path + mapParamsToQueryString(params);

	return fetch(url, {
		headers: defaultHeaders,
		...init
	})
};

// noinspection JSUnusedGlobalSymbols
export const postApi = (path, data = {}, params = {}, init = {}) => {
	let url = API_ROOT + path + mapParamsToQueryString(params);

	return fetch(url, {
		method: 'post',
		body: JSON.stringify(data),
		headers: defaultHeaders,
		...init
	})
};