import {API_ROOT} from "../config/api"
import {isEmpty} from "../utils/objects";

const defaultHeaders = {
	'Content-Type': 'application/vnd.api+json'
};

const mapObjectToParams = obj => {
	let url = '';

	if (!isEmpty(obj)) {
		url += '?';

		for (let entry in Object.entries(obj))
			url += entry.join('=')
	}

	return url
};

export const fetchApi = (path, params = {}, init = {}) => {
	let url = API_ROOT + path + mapObjectToParams(params);

	return fetch(url, {
		headers: defaultHeaders,
		...init
	})
};

export const postApi = (path, data = {}, params = {}, init = {}) => {
	let url = API_ROOT + path + mapObjectToParams(params);

	return fetch(url, {
		method: 'post',
		body: JSON.stringify(data),
		headers: defaultHeaders,
		...init
	})
};