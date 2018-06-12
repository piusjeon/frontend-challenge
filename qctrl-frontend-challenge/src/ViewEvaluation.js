import React, { Component } from 'react'
import { connect } from 'react-redux'

class ViewEvaluation extends Component {
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
)(ViewEvaluation)