import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchEvaluations} from "../actions/evaluations";
import EvaluationListItem from "../components/EvaluationListItem"
import {dataPropType, linksPropType, metaPropType} from "../api/types";

class EvaluationList extends Component {
	static propTypes = {
		fetchEvaluations: PropTypes.func.isRequired,
		data: dataPropType.isRequired,
		links: linksPropType,
		meta: metaPropType
	};

	componentWillMount() {
		this.props.fetchEvaluations()
	}

	render() {
		return (
			<div className="list-evaluations">
				list evaluations
				<br/>
				<table>
					<tbody>
						{this.props.data.map( ({id}) =>
							<EvaluationListItem key={id} evaluationId={id}/>
						)}
					</tbody>
				</table>
				<br/>
			</div>
		);
	}
}

const mapState = (state) => ({
	...state.pages.evaluationList
});

const mapDispatch = {
	fetchEvaluations: fetchEvaluations
};

export default connect(mapState, mapDispatch)(EvaluationList)