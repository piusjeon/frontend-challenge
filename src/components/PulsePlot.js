import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Plotly from 'plotly.js'
import styled from 'styled-components'

const plotWidth = 293;
const plotHeight = 225;

class PulsePlot extends Component {
	static propTypes = {
		pulse: PropTypes.shape({
			attributes: PropTypes.shape({
				times: PropTypes.arrayOf(PropTypes.string).isRequired,
				x_amplitudes: PropTypes.arrayOf(PropTypes.string).isRequired,
				y_amplitudes: PropTypes.arrayOf(PropTypes.string).isRequired,
				z_amplitudes: PropTypes.arrayOf(PropTypes.string).isRequired
			}).isRequired
		}).isRequired
	};

	/**
	 * @returns {Object}
	 */
	get pulse() {
		return this.props.pulse
	}

	/**
	 * @returns {string}
	 */
	get plotContainerId() {
		return 'evaluation-pulse-'+this.pulse.id
	}

	/**
	 * @returns {Object}
	 */
	get attributes() {
		return this.pulse.attributes;
	}

	/**
	 * @returns {Object[]}
	 */
	get plotLines() {
		// noinspection JSSuspiciousNameCombination
		return [
			{
				x: this.attributes.times,
				y: this.attributes.x_amplitudes,
				name: "X",
				mode: 'lines+markers',
				type: "scatter",
			},
			{
				x: this.attributes.times,
				y: this.attributes.y_amplitudes,
				name: "Y",
				mode: 'lines+markers',
				type: "scatter",
			},
			{
				x: this.attributes.times,
				y: this.attributes.z_amplitudes,
				name: "Z",
				mode: 'lines+markers',
				type: "scatter",
			}
		]
	}

	componentDidMount() {
		// noinspection JSUnresolvedFunction
		Plotly.newPlot(this.plotContainerId, this.plotLines, {
			width: plotWidth * 2
		})
	}

	render() {
		return (
			<Container width={plotWidth} height={plotHeight}>
				<Plot id={this.plotContainerId} />
			</Container>
		)
	}
}

const Container = styled.div`
	overflow: hidden;
	width: ${props => props.width+'px'};
	height: ${props => props.height+'px'};
`;

const Plot = styled.div`
  transform: scale(0.5) translate(-50%,-50%);
`;


export default PulsePlot