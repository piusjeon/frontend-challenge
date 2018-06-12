import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import store from "../store";
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Router>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	, div);
	ReactDOM.unmountComponentAtNode(div);
});
