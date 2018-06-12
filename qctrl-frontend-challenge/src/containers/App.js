import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Header from '../components/Header'
import ListEvaluations from './ListEvaluations'
import ViewEvaluation from './ViewEvaluation'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<Switch>
					<Route exact path="/" component={ListEvaluations}/>
					<Route path="/evaluations/:id" component={ViewEvaluation}/>
				</Switch>
			</div>
		);
	}
}

export default App
