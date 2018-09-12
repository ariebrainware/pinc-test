import React, { Component } from 'react'
import { Button ,Grid,Icon} from 'semantic-ui-react'
import Modal from 'react-modal-resizable-draggable'

import './index.css'

export default class ModalRnD extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modals: []
    }
  }

  openModal = async () => {
    await this.state.modals.push('')

    await this.setState({
        modals: this.state.modals
    })

  }

  closeModal = async (index) => {
    delete this.state.modals[index]

        await this.setState({
            modals: this.state.modals
        })
  }

  render() {
    const { modals } = this.state

    return (
      <div className="App">
        <Button inverted color="pink" onClick={this.openModal}>
          Add Modal
        </Button>
        {modals.map((modal, index) => {
          return (
            <Modal
              key={index}
              initWidth={300}
              initHeight={150}
              isOpen={true}
            >
               <div className="content">
                <div className="header">
                  <Grid>
                    <Grid.Column floated="left" width={5}>
                      <label>Welcome</label>
                    </Grid.Column>
                    <Grid.Column floated="right" className="icon-close">
                      <Icon
                        name="close"
                        onClick={() => this.closeModal(index)}
                      />
                    </Grid.Column>
                  </Grid>
                </div>
                <div className="body">
                  <p>Hello there...</p>
                </div>
              </div> 
            </Modal>
          )
        })}
      </div>
    )
  }
}
