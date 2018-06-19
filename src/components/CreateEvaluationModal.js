import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Control, Form } from 'react-redux-form';
import {doCreateEvaluation} from "../actions/evaluationsActions"
import Modal from "./Modal"
import styled from 'styled-components'

const mapState = null;

const mapDispatch = {
	doCreateEvaluation
};

class CreateEvaluationModal extends Component {
	static propTypes = {
		onCloseRequest: PropTypes.func.isRequired,
		doCreateEvaluation: PropTypes.func.isRequired
	};

	get onCloseRequest() {
		return this.props.onCloseRequest
	}

	handleSubmit(createEvaluationModel) {
		this.props.doCreateEvaluation(createEvaluationModel)
			.then( () =>
				this.onCloseRequest()
			)
	}

	render() {
		return (
			<Modal onCloseRequest={this.onCloseRequest}>

				<Heading1>Create a new</Heading1>
				<Heading2>Evaluation</Heading2>

				<FormContainer>
					<Form	model="createEvaluation" onSubmit={(createEvaluationModel) => this.handleSubmit(createEvaluationModel)}>

						<FormRow>
							<FormLabel htmlFor="createEvaluation.name">Title</FormLabel>
							<StyledTextControl model="createEvaluation.name" id="createEvaluation.name" placeholder="New Evaluation"/>
						</FormRow>

						<FormRow flex={true}>
							<FormCol>
								<FormLabel htmlFor="createEvaluation.maxRabiRate">Maximum Rabi Rate</FormLabel>
								<StyledTextControl model="createEvaluation.maxRabiRate" id="createEvaluation.maxRabiRate" placeholder="0.0001" />
							</FormCol>
							<FormCol>
								<FormLabel htmlFor="createEvaluation.polarAngle">Polar Angle</FormLabel>
								<StyledTextControl model="createEvaluation.polarAngle" id="createEvaluation.polarAngle" placeholder="10" />
							</FormCol>
						</FormRow>

						<FormRow>
							<SubmitButton>
								Create Evaluation
							</SubmitButton>
						</FormRow>

					</Form>
				</FormContainer>

			</Modal>
		)
	}
}

const Heading1 = styled.h1`
  font-size: 14px;
	font-weight: 400;
  line-height: 2.4;
  letter-spacing: 3.5px;
  text-align: center;
  color: var(--color-light-grey);
  text-transform: uppercase;
  margin: 0;
`;

const Heading2 = styled.h2`
  font-size: 28px;
	font-weight: 400;
  line-height: 1.2;
  letter-spacing: 5.6px;
  text-align: center;
  color: var(--color-grey);
  text-transform: uppercase;
  margin: 0;
`;

const FormContainer = styled.div`
	width: 330px;
	margin: 18px auto;
	text-align: left;
`;

const FormRow = styled.div`
	margin-top: 15px;
	display: ${props => props.flex ? 'flex' : 'block'};
`;

const FormCol = styled.div`
	width: 150px;
	&:first-child {
		margin-right: 30px;
	}
`;

const FormLabel = styled.label`
  font-size: 11px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  color: var(--color-grey);
  text-transform: uppercase;
`;

const StyledTextControl = styled(Control.text)`
  font-size: 14px;
  font-weight: 300;
	color: var(--color-dark-grey);
  width: 100%;
	height: 50px;
  padding: 15px;
	margin-top: 10px;
	border: 1px solid #c5c5c5;
	&::placeholder {
	  font-style: italic;
	  color: var(--color-light-grey);
	}
`;

const SubmitButton = styled.button.attrs({
	type: 'submit'
})`
  height: 42px;
	width: 100%;
  background-color: var(--color-violet);
  text-transform: uppercase;
	padding: 13px 12px;
	color: white;
	cursor: pointer;
	border-radius: 3px;
	font-size: 14px;
`

export default connect(mapState, mapDispatch)(CreateEvaluationModal)