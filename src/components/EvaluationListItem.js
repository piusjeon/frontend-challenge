import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import chevronRight from '../images/chevron_right.svg'
import {Link} from "react-router-dom"
import {ENDPOINT_EVALUATIONS} from "../api/endpoints"

const mapState = (state, ownProps) => ({
	evaluation: state.evaluations.entities[ownProps.evaluationId]
});

const mapDispatch = {};

class EvaluationListItem extends Component {
	static propTypes = {
		evaluationId: PropTypes.string.isRequired,
		evaluation: PropTypes.object.isRequired
	};

	get evaluation() {
		return this.props.evaluation
	}

	get name() {
		return this.evaluation.attributes.name
	}

	get shape() {
		return this.evaluation.attributes.shape
	}

	get polarAngle() {
		return this.evaluation.attributes.polar_angle
	}

	get maxRabiRate() {
		return this.evaluation.attributes.maximum_rabi_rate
	}

	get link() {
		return ENDPOINT_EVALUATIONS + this.props.evaluation.id;
	}

	render() {
		return (
			<tr className="evaluation-list-item">
				<td>{this.name}</td>
				<td>{this.shape}</td>
				<td>{this.polarAngle}</td>
				<td>{this.maxRabiRate}</td>
				<td><Link to={this.link}><img src={chevronRight} className="chevron-right" alt="go to evaluation"/></Link></td>
			</tr>
		)
	}
}

export default connect(mapState, mapDispatch)(EvaluationListItem)