import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageHidden = () => (
	<Message hidden>
		<Message.Header>Hidden message</Message.Header>
		<p>You can't see this message</p>
	</Message>
)

export default MessageHidden
