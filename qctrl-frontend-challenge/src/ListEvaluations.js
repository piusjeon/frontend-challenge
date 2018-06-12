import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom";

class ListEvaluations extends Component {
	render() {
		return (
      <p className="list-evaluations">
        list evaluations
	      <br/>
	      <Link to="/evaluations/43">Evaluation #43</Link>
      </p>
		);
	}
}

export default connect(
	state=>({

	}),
	{}
)(ListEvaluations)