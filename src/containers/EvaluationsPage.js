import React, {Component} from 'react'
import {connect} from 'react-redux'
import apiPropTypes from "../proptypes/apiPropTypes"
import routerPropTypes from "../proptypes/routerPropTypes"
import EvaluationList from "../components/EvaluationList"
import CreateEvaluationModal from "../components/CreateEvaluationModal";
import ReactSVG from 'react-svg'
import plusSVG from '../images/plus.svg'

const mapState = (state) => ({
	...state.pages.evaluationList
});

const mapDispatch = {};

class EvaluationsPage extends Component {
	static propTypes = {
		...routerPropTypes.propTypes,
		...apiPropTypes.collectionDataPropType
	};

	constructor(props) {
		super(props);

		this.state = {
			showCreateEvaluationModal: false,
		};
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
			<div className="evaluationsPage">

				<div className="evaluationsPageTitle">
					<span>Evaluations</span>
					<button type="button" onClick={() => this.handleOpenCreateEvaluationModal()}>
						<ReactSVG path={plusSVG} />
						Add
					</button>
				</div>

				<EvaluationList evaluationIds={this.visibleEvaluationIds}/>

				{this.state.showModal &&
				<CreateEvaluationModal onCloseRequest={() => this.handleCloseCreateEvaluationModal()} />}
			</div>
		)
	}
}

export default connect(mapState, mapDispatch)(EvaluationsPage)