import {isEmpty} from "../utils/objects";

export const API_ROOT = 'http://q-ctrl-api.appspot.com';

const defaultHeaders = {
	'Content-Type': 'application/vnd.api+json'
};

const mapParamsToQueryString = params => {
	let queryString = '';

	if (!isEmpty(params)) {
		queryString += '?';

		for (let param in params)
			if (params.hasOwnProperty(param))
				queryString += param + '=' + encodeURIComponent(params[param]);
	}

	return queryString
};

export const fetchApi = (path, params = {}, init = {}) => {
	let url = API_ROOT + path + mapParamsToQueryString(params);

	return new Promise((resolve, reject) => {
		fetch(url, {
			headers: defaultHeaders,
			...init
		})
			.then(res => {
				if (res.ok) {
					res.json().then( (data) => resolve(data) )
				} else {
					res.json().then( (data) => reject(data) )
				}
			})
			.catch(res => {
				reject(res)
			})
	})
};

// noinspection JSUnusedGlobalSymbols
export const postApi = (path, data = {}, params = {}, init = {}) => {
	let url = API_ROOT + path + mapParamsToQueryString(params);

	return new Promise((resolve, reject) => {
		fetch(url, {
			method: 'post',
			body: JSON.stringify(data),
			headers: defaultHeaders,
			...init
		})
			.then(res => {
				if (res.ok) {
					res.json().then( (data) => resolve(data) )
				} else {
					res.json().then( (data) => reject(data) )
				}
			})
			.catch(res => {
				reject(res)
			})
	})
};