import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import EvaluationListItem from "../components/EvaluationListItem"
import styled from 'styled-components'

const mapState = (state) => ({
	...state.pages.evaluationList
});

const mapDispatch = {};

class EvaluationList extends Component {
	static propTypes = {
		evaluationIds: PropTypes.array.isRequired
	};

	get evaluationIds() {
		return this.props.evaluationIds;
	}

	render() {
		return (
			<Table>
				<thead>
				<tr>
					<TableHeading>Title</TableHeading>
					<TableHeading>Type</TableHeading>
					<TableHeading>Polar Angle</TableHeading>
					<TableHeading>Max Rabi Rate</TableHeading>
					<TableHeading> </TableHeading>
				</tr>
				</thead>
				<tbody>
				{this.evaluationIds.map(id =>
					<EvaluationListItem key={id} evaluationId={id}/>
				)}
				</tbody>
			</Table>
		)
	}
}

const Table = styled.table`
	width: 100%;
	border-top: solid 1px #ece9f0;
	border-collapse: collapse;
`;

const TableHeading = styled.th`
  height: 43px;
  font-size: 11px;
  color: var(--color-light-grey);
  text-transform: uppercase;
  border-bottom: solid 1px #ece9f0;
  padding: 15px;
  text-align: left;
`;

export default connect(mapState, mapDispatch)(EvaluationList)