import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<Link to="/">Evaluations</Link>
			</div>
		);
	}
}

export default connect(
	state => ({}),
	{}
)(Header)
