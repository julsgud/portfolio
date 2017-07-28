import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';

const Container = styled(Col)`
	margin-top: 100px;
`;

const H1 = styled.h1`
	font-weight: 300;
	font-size: 24px;
	margin-top: 10px;
	margin-bottom: 15px;
`;

const Success = (props) => {
	return(
		<Container xs={10}>
			<H1> Thanks for writing, I'll be in touch soon! </H1>
		</Container>
	);
};

export default Success;