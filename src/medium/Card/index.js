import React from 'react'
import { Card, Icon, Image} from 'semantic-ui-react'

const Extra = ({text})=> (
	<a>
		<Icon name='user' />
		{text}
	</a>
)

const CardFollowers = ({data,text}) => {
	return (
		<Card className='wrapper'>
			<Image src={data.avatar} fluid/>
			<Card.Content>
				<Card.Header>{data.first_name}</Card.Header>
				<Card.Meta>
					Followed
				</Card.Meta>
				<Card.Description>{data.first_name + ' ' + data.last_name}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				{<Extra text={text} />}
			</Card.Content>
		</Card>
	)
}

export default CardFollowers