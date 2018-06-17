import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import routerPropTypes, {matchParamId} from "../proptypes/routerPropTypes"
import {getEvaluation} from "../actions/evaluationsActions"
import PulseListItem from "../components/PulseListItem"

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

	get evaluation() {
		return this.props.evaluation
	}

	get evaluationName() {
		return this.evaluation ? this.evaluation.attributes.name : '';
	}

	get relationships() {
		return this.evaluation ? this.evaluation.relationships : null;
	}

	get pulseIds() {
		const pulseData = this.relationships ? this.relationships.pulses.data : [];
		return pulseData.map( ({id}) => id )
	}

	componentWillMount() {
		this.props.getEvaluation(this.props.evaluationId, true)
	}

	render() {
		return (
			<div>
	      <p className="view-evaluation">
		      {this.evaluationName}
	      </p>
				<ul>
					{this.pulseIds.map( id =>
						<PulseListItem key={id} pulseId={id} />
					)}
				</ul>
			</div>
		)
	}
}

export default connect(mapState, mapDispatch)(EvaluationPage)