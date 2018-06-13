import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ChevronRight from '../images/chevron_right.svg'

class EvaluationListItem extends Component {
	static propTypes = {
		evaluation: PropTypes.object.isRequired
	};

	render() {
		return (
			<tr className="evaluation-list-item">
				<td>{this.props.evaluation.attributes.name}</td>
				<td>{this.props.evaluation.attributes.shape}</td>
				<td>{this.props.evaluation.attributes.polar_angle}</td>
				<td>{this.props.evaluation.attributes.maximum_rabi_rate}</td>
				<td><img src={ChevronRight} className="chevron-right" alt="go to evaluation"/></td>
			</tr>
		);
	}
}


export default EvaluationListItem