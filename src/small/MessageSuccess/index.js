import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageSuccess = () => (
	<Message positive>
		<Message.Header>Login Success!!</Message.Header>
		<p>
      Welcome back to our lovely <b>PINC</b> .
		</p>
	</Message>
)

export default MessageSuccess
