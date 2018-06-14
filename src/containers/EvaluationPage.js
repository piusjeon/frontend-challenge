import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import routerPropTypes, {matchParamId} from "../proptypes/routerPropTypes";
import {getEvaluation} from "../actions/evaluations";

const mapState = (state, ownProps) => ({
	evaluationId: ownProps.match.params.id,
	evaluation: state.evaluations.entities[ownProps.match.params.id]
});

const mapDispatch = {
	getEvaluation
};

class EvaluationPage extends Component {
	static propTypes = {
		...routerPropTypes,
		match: matchParamId,
		evaluation: PropTypes.object
	};

	componentWillMount() {
		this.props.getEvaluation(this.props.evaluationId, true)
	}

	render() {
		return (
			<div>
	      <p className="view-evaluation">
	        View evaluation
	      </p>
				<pre>
					{JSON.stringify(this.props.evaluation)}
				</pre>
			</div>
		);
	}
}

export default connect(mapState, mapDispatch)(EvaluationPage)