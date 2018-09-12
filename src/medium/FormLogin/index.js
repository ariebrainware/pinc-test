import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import Login from '../../function/Login'

class FormLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  handleClick = () => {
    this.setState({ active: !this.state.active })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const URL = 'api/login'
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    const response = await Login(URL, data)

    response
      ? this.setState({ loggedIn: true })
      : this.setState({ loggedIn: false })
      console.log(this.state.loggedIn)
  }

  render() {
    const { active } = this.state
    const { loggedIn } = this.state
    console.log(loggedIn)
    if(loggedIn){
      console.log(loggedIn)
      return <Redirect to='/user/dashboard' />
    }

    return (
      <Container textAlign="center">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Your email"
              name="email"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Your password"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button
            type="submit"
            toggle
            loading={active}
            onClick={this.handleClick}
          >
            Login
          </Button>
        </Form>
      </Container>
    )
  }
}

export default FormLogin
