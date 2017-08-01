import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';

const Container = styled(Col)`
	margin: 0 1.75em 2em 1.75em;
	padding: 0;
`;

const Title = styled.div`
	font-weight: 300;
	font-size: 1.5em;
	margin-top: 1em;
	margin-bottom: 1em;
`;

const P = styled.p`
	padding: 0;
	margin: 0;
	font-size: 4em;
	color: rgba(29, 29, 29, .95);
`;

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