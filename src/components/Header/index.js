import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {Row, Col} from 'react-flexbox-grid';

const H1 = styled.h1`
	color: #0B0B0B;
	margin-left: 12px;
`;

export default class Header extends React.Component {
	render() {
		return(
			<Row middle="xs">
				<Col xsOffset={0} xs={8}>
					<H1> Julio Gudiño </H1>
				</Col>
				<Col xs={2}>
					<Link to="/about"> About </Link>
				</Col>
				<Col xs={2}>
					<Link to="/work"> Work </Link>
				</Col>
			</Row>
		);
	}
}