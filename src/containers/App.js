import React, {Component} from 'react'
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import EvaluationsPage from './EvaluationsPage'
import EvaluationPage from './EvaluationPage'

class App extends Component {
	render() {
		return (
			<Container>
				<Header/>
				<Switch>
					<Route exact path="/" component={EvaluationsPage}/>
					<Route path="/evaluations/:id" component={EvaluationPage}/>
				</Switch>
			</Container>
		);
	}
}

const Container = styled.div`
	min-height: 100vh;
	background: var(--color-light-violet);
`;

export default App
