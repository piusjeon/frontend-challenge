import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import apiPropTypes from "../proptypes/apiPropTypes"
import routerPropTypes from "../proptypes/routerPropTypes"
import {fetchEvaluations} from "../actions/evaluationsActions"
import EvaluationListItem from "../components/EvaluationListItem"

const mapState = (state) => ({
	...state.pages.evaluationList
});

const mapDispatch = {
	fetchEvaluations
};

class EvaluationList extends Component {
	static propTypes = {
		...routerPropTypes.propTypes,
		...apiPropTypes.collectionDataPropType,
		fetchEvaluations: PropTypes.func.isRequired
	};

	get evaluationIds() {
		return this.props.data.map( ({id}) => id );
	}

	componentWillMount() {
		this.props.fetchEvaluations()
	}

	render() {
		return (
			<div className="list-evaluations">
				<table>
					<tbody>
						{this.evaluationIds.map( id =>
							<EvaluationListItem key={id} evaluationId={id} />
						)}
					</tbody>
				</table>
				<br/>
			</div>
		)
	}
}

export default connect(mapState, mapDispatch)(EvaluationList)