import React, { Component } from 'react'
import { Container, Grid, Icon, Pagination } from 'semantic-ui-react'

import GetFollowers from '../../function/GetFollowers'
import CardFollowers from '../../medium/Card'
import ModalRnD from '../../medium/Modal'

import 'animate.css'
import './index.css'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      followers: [],
      activePage: 1
    }
  }

  componentDidMount = async () => {
    const URL = `api/users?page=${this.state.activePage}`
    const response = await GetFollowers(URL)

    await this.setState({
      followers: response.data.data
    })
  }

  handlePageChange = async (e, { activePage }) => {
    await this.setState({ activePage })

    const URL = `api/users?page=${this.state.activePage}`
    console.log(URL)
    const response = await GetFollowers(URL)
    await this.setState({
      followers: response.data.data
    })
  }

  render() {
    const { activePage } = this.state
    const ColumnSegment = this.state.followers.map(item => {
      return (
        <Grid.Column key={item.id}>
          <CardFollowers data={item} text="Visit profile" />
        </Grid.Column>
      )
    })

    return (
      <Container textAlign="center" className="container">
        <Grid columns="equal">
          <Grid.Row className="animated fadeIn delay-2s">
            {ColumnSegment}
          </Grid.Row>
          <Grid.Row className="animated fadeIn delay-2s">
            <Pagination
              defaultActivePage={activePage}
              ellipsisItem={{
                content: <Icon name="ellipsis horizontal" />,
                icon: true
              }}
              firstItem={{
                content: <Icon name="angle double left" />,
                icon: true
              }}
              lastItem={{
                content: <Icon name="angle double right" />,
                icon: true
              }}
              prevItem={{ content: <Icon name="angle left" />, icon: true }}
              nextItem={{ content: <Icon name="angle right" />, icon: true }}
              totalPages={4}
              onPageChange={this.handlePageChange}
            />
          </Grid.Row>
          <Grid.Row className="animated fadeIn delay-2s">
            <ModalRnD />
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}
