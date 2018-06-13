import {API_ROOT} from "../config/api"

const initDefault = {
	headers: {
		'Content-Type': 'application/vnd.api+json'
	}
};

export const fetchApi = (path, init) => {
	return fetch(API_ROOT + path, {
		...initDefault,
		...init
	})
};

export const postApi = (path, init) => {
	throw "not implemented"
}