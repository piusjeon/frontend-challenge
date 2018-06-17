import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
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
		evaluationIds: PropTypes.array.isRequired,
		fetchEvaluations: PropTypes.func.isRequired
	};

	get evaluationIds() {
		return this.props.evaluationIds;
	}

	componentWillMount() {
		this.props.fetchEvaluations()
	}

	render() {
		return (
			<table className="list-evaluations">
				<tbody>
					{this.evaluationIds.map( id =>
						<EvaluationListItem key={id} evaluationId={id} />
					)}
				</tbody>
			</table>
		)
	}
}

export default connect(mapState, mapDispatch)(EvaluationList)