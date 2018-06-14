import PropTypes from 'prop-types'

export const dataPropType = PropTypes.array;

export const linksPropType = PropTypes.shape({
	first: PropTypes.string.isRequired,
	last: PropTypes.string.isRequired,
	next: PropTypes.string,
	prev: PropTypes.string
});

export const paginationPropType = PropTypes.shape({
	count: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
	pages: PropTypes.number.isRequired
});

export const metaPropType = PropTypes.shape({
	pagination: paginationPropType
});

export const collectionDataPropType = {
	data: dataPropType.isRequired,
	links: linksPropType,
	meta: metaPropType
};

export default {
	dataPropType,
	linksPropType,
	paginationPropType,
	metaPropType,
	collectionDataPropType
}