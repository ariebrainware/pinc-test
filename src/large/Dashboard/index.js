import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

import GetFollowers from '../../function/GetFollowers'
import CardFollowers from '../../medium/Card'

import 'animate.css'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      followers: []
    }
  }

  componentDidMount = async () => {
    const URL = 'api/users?page=1'
    const response = await GetFollowers(URL)
    
    await this.setState({
      followers: response.data.data
    })
  }

  render() {
    const ColumnSegment = this.state.followers.map(item => {
      return (
        <Grid.Column key={item.id}>
          <CardFollowers data={item} text="Visit profile" />
        </Grid.Column>
      )
    })

    return (
      <Container textAlign="center">
        <Grid columns="equal">
          <Grid.Row className='animated fadeIn delay-2s'>{ColumnSegment}</Grid.Row>
        </Grid>
      </Container>
    )
  }
}
