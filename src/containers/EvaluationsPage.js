import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {fetchEvaluations} from "../actions/evaluationsActions"
import apiPropTypes from "../proptypes/apiPropTypes"
import routerPropTypes from "../proptypes/routerPropTypes"
import EvaluationList from "../components/EvaluationList"
import CreateEvaluationModal from "../components/CreateEvaluationModal"
import AddButton from '../components/buttons/AddButton'
import PropTypes from "prop-types";

const mapState = (state) => ({
	...state.pages.evaluationList
});

const mapDispatch = {
	fetchEvaluations
};

class EvaluationsPage extends Component {
	static propTypes = {
		...routerPropTypes.propTypes,
		...apiPropTypes.collectionDataPropType,
		fetchEvaluations: PropTypes.func.isRequired
	};

	constructor() {
		super();

		this.state = {
			showCreateEvaluationModal: false,
		};
	}

	componentWillMount() {
		this.props.fetchEvaluations()
	}

	handleOpenCreateEvaluationModal() {
		this.setState({ showModal: true })
	}

	handleCloseCreateEvaluationModal() {
		this.setState({ showModal: false })
	}

	get visibleEvaluationIds() {
		return this.props.data.map( ({id}) => id );
	}

	render() {
		return (
			<Container>

				<Title>
					Evaluations
					<TitleSpacer/>
					<AddButton onClick={() => this.handleOpenCreateEvaluationModal()}/>
				</Title>

				{ !!this.visibleEvaluationIds.length &&
					<EvaluationList evaluationIds={this.visibleEvaluationIds}/>
				}

				{ this.state.showModal &&
					<CreateEvaluationModal onCloseRequest={() => this.handleCloseCreateEvaluationModal()} />
				}

			</Container>
		)
	}
}

const Container = styled.div`
	background: transparent;
	width: 1050px;
	margin: 0 auto;
	padding-bottom: 50px;
`;

const Title = styled.h1`
	margin: 30px 0;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.8px;
  color: var(--color-grey);
`;

const TitleSpacer = styled.span`
	display:inline-block;
	width: 28px;
`;


export default connect(mapState, mapDispatch)(EvaluationsPage)