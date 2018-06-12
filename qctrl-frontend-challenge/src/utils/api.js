import {API_ROOT} from "../config/api"

const initDefault = {
	headers: {
		'Content-Type': 'application/vnd.api+json'
	}
};

const fetchAPI = (path, init) => {
	return fetch(API_ROOT + path, {
		...initDefault,
		...init
	})
};

export default fetchAPI