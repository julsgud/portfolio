import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';

import media from 'styles';

const ani = keyframes`${bounce}`;

const Container = styled(Col)`
	margin: 0 1.75em 2em 1.75em;
	padding: 0;

	${media.medium`
		margin-top: 6em;
		margin-left: -2em;
	`};
`;

const Title = styled.div`
	font-weight: 300;
	font-size: 1.4em;
	margin-top: 1em;
	margin-bottom: 1em;

	${media.medium`
		font-size: 1.2em;
	`};

	${media.large`
		font-size: 1.4em;
	`};
`;

const P = styled.p`
	padding: 0;
	margin: 0;
	font-size: 4em;
	color: rgba(29, 29, 29, .95);

	${media.medium`
		font-size: 3em;
	`};

	${media.large`
		font-size: 4em;
	`};

	animation: 2s ${ani};
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