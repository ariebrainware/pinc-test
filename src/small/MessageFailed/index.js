import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageFailed = () => (
	<Message negative>
		<Message.Header>Login Failed!!</Message.Header>
		<p>Please check your email and password again</p>
	</Message>
)

export default MessageFailed