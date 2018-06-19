import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import routerPropTypes, {matchParamId} from "../proptypes/routerPropTypes"
import {getEvaluation} from "../actions/evaluationsActions"
import PulseListItem from "../components/PulseListItem"
import Breadcrumbs from '../components/Breadcrumbs'
import styled from 'styled-components'

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

	/**
	 * @returns {Object}
	 */
	get evaluation() {
		return this.props.evaluation
	}

	/**
	 * @returns {string}
	 */
	get evaluationName() {
		return this.evaluation ? this.evaluation.attributes.name : '';
	}

	/**
	 * @returns {Object[]|null}
	 */
	get relationships() {
		return this.evaluation ? this.evaluation.relationships : null;
	}

	/**
	 * @returns {string[]}
	 */
	get pulseIds() {
		const pulseData = this.relationships ? this.relationships.pulses.data : [];
		return pulseData.map( ({id}) => id )
	}

	// this can be passed down the hierarchy
	/**
	 * @returns {Object[]}
	 */
	get breadcrumbs() {
		return [
			{ name: 'Evaluations', target: '/evaluations/' },
			{ name: this.evaluationName, target: null, isCurrent: true }
		]
	}

	componentWillMount() {
		this.props.getEvaluation(this.props.evaluationId, true)
	}

	render() {
		return (
			<Container>
				<SubHeader>
					<Breadcrumbs breadcrumbs={this.breadcrumbs} />
				</SubHeader>

				{ !!this.pulseIds.length &&
					<PulseList>
						{this.pulseIds.map( id =>
							<PulseListItem key={id} pulseId={id} />
						)}
					</PulseList>
				}

			</Container>
		)
	}
}

const Container = styled.div`
	background: transparent;
	width: 100%
	padding-bottom: 50px;
`;

const SubHeader = styled.div`
  height: 36px;
  background-color: white;
	padding: 0 20px;
  border-top: solid 1px #e9e9e9;
  border-bottom: solid 1px #edeaf2;
	display: flex;
  align-items: center;
`;

const PulseList = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: top;
	justify-content: left;
`;

export default connect(mapState, mapDispatch)(EvaluationPage)