import PropTypes from 'prop-types';

export const location = PropTypes.shape({
	hash: PropTypes.string.isRequired,
	key: PropTypes.string, // only in createBrowserHistory and createMemoryHistory
	pathname: PropTypes.string.isRequired,
	search: PropTypes.string.isRequired
});

export const history = PropTypes.shape({
	action: PropTypes.oneOf(['PUSH', 'REPLACE', 'POP']).isRequired,
	length: PropTypes.number,
	location: location.isRequired
});

export const match = PropTypes.shape({
	isExact: PropTypes.bool,
	params: PropTypes.object.isRequired,
	path: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
});

export const paramId = PropTypes.shape({
	id: PropTypes.string.isRequired
});

export const matchParamId = PropTypes.shape({
	isExact: PropTypes.bool,
	params: paramId,
	path: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
});

export default {
	location,
	history,
	match
};