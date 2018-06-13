import React, { Component } from 'react'
import { connect } from 'react-redux'

class EvaluationPage extends Component {
	render() {
		return (
      <p className="view-evaluation">
        View evaluation
      </p>
		);
	}
}

export default connect(
	state=>({

	}),
	{}
)(EvaluationPage)