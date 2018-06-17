import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const mapState = (state, ownProps) => ({
	pulse: state.pulses.entities[ownProps.pulseId]
});

const mapDispatch = {};

class PulseListItem extends Component {
	static propTypes = {
		pulseId: PropTypes.string.isRequired,
		pulse: PropTypes.object
	};

	get pulse() {
		return this.props.pulse
	}

	render() {
		return (
			<li className="evaluation-list-item">
				{JSON.stringify(this.pulse)}
			</li>
		)
	}
}

export default connect(mapState, mapDispatch)(PulseListItem)