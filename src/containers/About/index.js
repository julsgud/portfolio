import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';

const Container = styled(Row)`
	margin-top: 50px;
`;

const Img = styled.img`
	width: 100%;
	height: 66%;
	max-width: 912px;
	z-index: 0;
	/*margin: auto;*/
	/*min-height: 900px;*/
`;

const RedH1 = styled.h1`
	color: rgba(251, 74, 35, 1);
	font-weight: 700;
	font-size: 36px;
	margin-top: 10px;
	margin-left: 15px;
	margin-bottom: 10px;
`;

export default class About extends React.Component {
	render() {
		return(
			<Container>
				<Row>
					<Col xsOffset={1}>
						<RedH1> Hi!</RedH1>
					</Col>
				</Row>
				<Row>
					<Col xsOffset={1} xs={10}>
						<p>  I am an artist and developer from Mexico City. I studied Electronic Production and Music Therapy at Berklee College of Music. I am driven and motivated by projects that attempt at bending and breaking the mold. Experimentation is my true calling. I am enthusiastic about learning new tools and ideas for synthesizing an end product or digital experience. Let's make something together! </p>
					</Col>
				</Row>
			</Container>
		);
	}
}