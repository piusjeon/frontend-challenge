import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import chevronRight from '../images/chevron_right.svg'
import {Link} from "react-router-dom";
import {ENDPOINT_EVALUATIONS} from "../api/endpoints";

const mapState = (state, ownProps) => ({
	evaluation: state.evaluations.entities[ownProps.evaluationId]
});

const mapDispatch = {};

class EvaluationListItem extends Component {
	static propTypes = {
		evaluation: PropTypes.object.isRequired,
		evaluationId: PropTypes.string.isRequired
	};

	get link() {
		return ENDPOINT_EVALUATIONS + this.props.evaluation.id;
	}

	render() {
		return (
			<tr className="evaluation-list-item">
				<td>{this.props.evaluation.attributes.name}</td>
				<td>{this.props.evaluation.attributes.shape}</td>
				<td>{this.props.evaluation.attributes.polar_angle}</td>
				<td>{this.props.evaluation.attributes.maximum_rabi_rate}</td>
				<td><Link to={this.link}><img src={chevronRight} className="chevron-right" alt="go to evaluation"/></Link></td>
			</tr>
		);
	}
}

export default connect(mapState, mapDispatch)(EvaluationListItem)