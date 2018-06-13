import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchEvaluations} from "../actions/evaluations";
import {Link} from "react-router-dom";
import EvaluationListItem from "../components/EvaluationListItem"

class EvaluationList extends Component {
	static propTypes = {
		fetchEvaluations: PropTypes.func.isRequired,
		data: PropTypes.array.isRequired,
		links: PropTypes.object.isRequired,
		meta: PropTypes.object.isRequired,
		evaluations: PropTypes.object.isRequired
	};

	componentDidMount() {
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
							<EvaluationListItem key={id} evaluation={this.props.evaluations.entities[id]}/>
						)}
					</tbody>
				</table>
				<br/>
				<Link to="/evaluations/43">Evaluation #43</Link>
			</div>
		);
	}
}


export default connect(state => ({
	...state.pages.evaluationList,
	evaluations: state.evaluations
}), {
	fetchEvaluations: fetchEvaluations
})(EvaluationList)