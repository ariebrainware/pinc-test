import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './large/Home'
import Dashboard from './large/Dashboard'

import './App.css'

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/user/dashboard' component={Dashboard} />
				</Switch>
			</Router>			
		)
	}
}

export default App
