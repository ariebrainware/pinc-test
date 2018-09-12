import React,{Component} from 'react'
import { Header } from 'semantic-ui-react'

import FormLogin from '../../medium/FormLogin'

export default class Home extends Component{
	render(){
		return(<div className="App">
			<Header as="h1">Pinc-Login</Header>
			<FormLogin />
		</div>)
	}
}
