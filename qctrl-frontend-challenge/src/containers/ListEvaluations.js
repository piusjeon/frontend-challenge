import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {doNothing} from "../actions/nothingActions";
import {Link} from "react-router-dom";

class ListEvaluations extends Component {
	static propTypes = {
		doNothing: PropTypes.func.isRequired,
		nothing: PropTypes.string.isRequired
	};

	componentWillMount() {
		this.props.doNothing()
	}

	render() {
		return (
			<div className="list-evaluations">
				list evaluations
				<br/>
				<p>{this.props.nothing}</p>
				<br/>
				<Link to="/evaluations/43">Evaluation #43</Link>
			</div>
		);
	}
}


export default connect(state => ({
	nothing: 'nothing here man'
}), {
	doNothing
})(ListEvaluations)