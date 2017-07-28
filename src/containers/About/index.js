import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';

const Container = styled(Col)`
	margin: 0;
	margin-top: 40px;
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
	font-weight: 400;
	font-size: 26px;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const Description = styled.p`
	font-size: 16px;
	font-weight: 300;
	letter-spacing: .2px;
	text-align: justify;
	margin-left: 0px; 
	/*font-family: 'Lato', sans-serif;*/
	font-family: 'Roboto Mono', monospace;
`;

const Tag = styled.p`
	font-size: 16px;
	font-weight: 300;
	letter-spacing: .2px;
	text-align: justify;
	margin-left: 0;
	/*font-family: 'Lato', sans-serif;*/
	font-family: 'Roboto Mono', monospace;
`;


export default class About extends React.Component {
	render() {
		return(
			<Container xs={11}>
				<Row>
					<Col>
						<RedH1> Hey!</RedH1>
					</Col>
				</Row>
				<Row>
					<Col>
						<Description>  I am an artist and developer from Mexico City. I studied Electronic Production and Music Therapy at Berklee College of Music. Projects that attempt to bend and break the mold drive and motivate me. Experimentation is my true calling. I am enthusiastic about learning new tools and ideas to synthesize an end product or digital experience. </Description>
						<br/>
						<Tag> Let's make something together! </Tag>
					</Col>
				</Row>
			</Container>
		);
	}
}