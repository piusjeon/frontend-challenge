import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ChevronButton from '../components/buttons/ChevronButton'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import numeral from 'numeral'

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

	get polarAngle() {
		// noinspection JSUnresolvedFunction
		return numeral(this.evaluation.attributes.polar_angle).format('0.0000')
	}

	get maxRabiRate() {
		return this.evaluation.attributes.maximum_rabi_rate
	}

	get link() {
		return '/evaluations/' + this.props.evaluation.id;
	}

	render() {
		return (
			<tr>
				<TableData width="230px"><Name>{this.name}</Name></TableData>
				<TableData width="150px"><Type>Pulse</Type></TableData>
				<TableData width="150px"><Decimal>{this.polarAngle}</Decimal></TableData>
				<TableData width="150px"><Decimal>{this.maxRabiRate}</Decimal></TableData>
				<TableData><Link to={this.link}><ChevronButton direction="right"/></Link></TableData>
			</tr>
		)
	}
}


const TableData = styled.td`
  height: 72px;
  border-bottom: solid 1px #ece9f0;
  background: white;
  padding: 15px;
  &:first-child {
    padding-left: 15px;
  }
  &:last-child {
    text-align: right;
  }
`;

const Name = styled.span`
  font-size: 14px;
  letter-spacing: 0.7px;
  color: var(--color-grey);
`;

const Type = styled.span`
  width: 68px;
  height: 16px;
  background-color: #32cd32;
  font-size: 9px;
  text-transform: uppercase;
  border-radius: 3px;
  color: white;
  display:flex;
  align-items: center;
	justify-content: center;
`;

const Decimal = styled.span`
  font-size: 12px;
  letter-spacing: 0.6px;
  color: var(--color-grey);
`;

export default connect(mapState, mapDispatch)(EvaluationListItem)