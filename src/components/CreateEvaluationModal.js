import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Control, Form } from 'react-redux-form';
import {doCreateEvaluation} from "../actions/evaluationsActions"

const mapState = null;

const mapDispatch = {
	doCreateEvaluation
};


class CreateEvaluationModal extends Component {
	static propTypes = {
		onCloseRequest: PropTypes.func.isRequired,
		doCreateEvaluation: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keyup', this.handleKeyUp, false);
		document.addEventListener('click', this.handleOutsideClick, false);
	}

	componentWillUnmount() {
		window.removeEventListener('keyup', this.handleKeyUp, false);
		document.removeEventListener('click', this.handleOutsideClick, false);
	}

	get onCloseRequest() {
		return this.props.onCloseRequest
	}

	// Handle the key press event.
	handleKeyUp(e) {
		const keys = {
			27: () => {
				e.preventDefault();
				this.onCloseRequest();
				window.removeEventListener('keyup', this.handleKeyUp, false);
			},
		};

		if (keys[e.keyCode]) { keys[e.keyCode](); }
	}

	handleOutsideClick(e) {
		if (!(this.modal)) {
			if (!this.modal.contains(e.target)) {
				this.onCloseRequest();
			}
		}
	}


	handleSubmit(createEvaluationModel) {
		this.props.doCreateEvaluation(createEvaluationModel)
			.then( () =>
				this.onCloseRequest()
			)
	}

	render() {
		return (
			<div className="modalOverlayContainer">
				<div className="modal" ref={node => (this.modal = node)}>
					<div className="modalContent">

						<h2 className="modalContent__h2">Create a new</h2>

						<h1 className="modalContent__h1">Evaluation</h1>

						<Form	model="createEvaluation" onSubmit={(createEvaluationModel) => this.handleSubmit(createEvaluationModel)}>

							<label htmlFor="createEvaluation.name">Title</label>
							<Control.text model="createEvaluation.name" id="createEvaluation.name" />

							<label htmlFor="createEvaluation.maxRabiRate">Maximum Rabi Rate</label>
							<Control.text model="createEvaluation.maxRabiRate" id="createEvaluation.maxRabiRate" />

							<label htmlFor="createEvaluation.polarAngle">Polar Angle</label>
							<Control.text model="createEvaluation.polarAngle" id="createEvaluation.polarAngle" />

							<button type="submit">
								Create Evaluation
							</button>

						</Form>

					</div>
					<button	type="button" className="modal__button--close" onClick={this.onCloseRequest}>Cancel</button>
				</div>
			</div>
		)
	}
}

export default connect(mapState, mapDispatch)(CreateEvaluationModal)