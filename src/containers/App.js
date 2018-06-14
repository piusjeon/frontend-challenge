import React, {Component} from 'react'
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Header from '../components/Header'
import EvaluationList from './EvaluationList'
import EvaluationPage from './EvaluationPage'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<Switch>
					<Route exact path="/" component={EvaluationList}/>
					<Route path="/evaluations/:id" component={EvaluationPage}/>
				</Switch>
			</div>
		);
	}
}

export default App
