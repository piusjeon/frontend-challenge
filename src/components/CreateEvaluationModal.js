import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Control, Form, Errors, actions } from 'react-redux-form';
import {doCreateEvaluation, resetCreateEvaluationForm} from "../actions/evaluationsActions"
import Modal from "./Modal"
import styled from 'styled-components'
import {ACTION_EVALUATIONS_CREATE_FAIL, ACTION_EVALUATIONS_CREATE_SUCCESS} from "../actions/types";

const mapState = null;

const mapDispatch = {
	doCreateEvaluation,
	resetCreateEvaluationForm
};

class CreateEvaluationModal extends Component {
	static propTypes = {
		onCloseRequest: PropTypes.func.isRequired,
		doCreateEvaluation: PropTypes.func.isRequired,
		resetCreateEvaluationForm: PropTypes.func.isRequired
	};

	constructor() {
		super();

		this.state = {
			errors: []
		}
	}

	get onCloseRequest() {
		this.props.resetCreateEvaluationForm();
		return this.props.onCloseRequest
	}

	handleSubmit(createEvaluationModel) {
		this.props.doCreateEvaluation(createEvaluationModel)
			.then( (action) => {
				switch (action.type) {
					case ACTION_EVALUATIONS_CREATE_SUCCESS:
						this.onCloseRequest();
						break;
					case ACTION_EVALUATIONS_CREATE_FAIL:
					default:
						// noinspection JSAccessibilityCheck
						this.setState({errors: action.payload.errors});
						break;
				}
			})
	}

	componentWillMount() {
		// noinspection JSAccessibilityCheck
		this.setState({errors: []});
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
							<StyledTextControl
								id="createEvaluation.name"
								placeholder="New Evaluation"
								model="createEvaluation.name"
								validators={{
									isRequired: val => val && val.length
								}}
							/>
							<StyledErrors
								model="createEvaluation.name"
								messages={{
									isRequired: 'Enter a title'
								}}
								show="touched"
							/>
						</FormRow>

						<FormRow flex={true}>
							<FormCol>
								<FormLabel htmlFor="createEvaluation.maxRabiRate">Maximum Rabi Rate</FormLabel>
								<StyledTextControl
									id="createEvaluation.maxRabiRate"
									placeholder="0.0001"
									model="createEvaluation.maxRabiRate"
									validators={{
										isRequired: val => val && val.length
									}}
								/>
								<StyledErrors
									model="createEvaluation.maxRabiRate"
									messages={{
										isRequired: 'Enter maximum rabi rate'
									}}
									show="touched"
								/>
							</FormCol>
							<FormCol>
								<FormLabel htmlFor="createEvaluation.polarAngle">Polar Angle</FormLabel>
								<StyledTextControl
									id="createEvaluation.polarAngle"
									placeholder="10"
									model="createEvaluation.polarAngle"
									validators={{
										isRequired: val => val && val.length
									}}
								/>
								<StyledErrors
									model="createEvaluation.polarAngle"
									messages={{
										isRequired: 'Enter polar angle'
									}}
									show="touched"
								/>
							</FormCol>
						</FormRow>

						<FormRow>
							<SubmitButton>
								Create Evaluation
							</SubmitButton>
							{this.state.errors.map( (error, index) =>
								<FormError key={index}>{error.detail}</FormError>
							)}
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

const StyledErrors = styled(Errors)`
	margin: 5px 1px 0;
  font-size: 11px;
	font-weight: 400;
  letter-spacing: 0.6px;
  color: var(--color-danger);
`;

const FormError = styled.div`
	margin-top: 10px;
  font-size: 11px;
	font-weight: 400;
  letter-spacing: 0.6px;
  color: var(--color-danger);

`;

export default connect(mapState, mapDispatch)(CreateEvaluationModal)