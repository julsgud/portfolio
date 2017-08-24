import React from 'react';
import {Row, Col} from 'react-flexbox-grid';

import {Container, Title, P} from './unique-components';

// Success Component
// User is automatically routed here after sending message
// using contact form.

const Success = (props) => {
	return(
		<Container xs={12}>
			<Title> Thanks for writing, I'll be in touch soon! </Title>
			<Row center="xs">
				<P><i className="fa fa-thumbs-up" aria-hidden="true"></i></P>
			</Row>
		</Container>
	);
};

export default Success;