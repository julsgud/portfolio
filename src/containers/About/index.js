import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';

const Container = styled(Row)`
	margin: 0;
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

const Description = styled.p`
	letter-spacing: .2px;
	text-align: justify;
	margin-bottom: 
	/*font-family: 'Lato', sans-serif;*/
	font-family: 'Roboto Mono', monospace;
`;

const Tag = styled.p`
	letter-spacing: .2px;
	text-align: justify;
	margin: 0;
	/*font-family: 'Lato', sans-serif;*/
	font-family: 'Roboto Mono', monospace;
`;


export default class About extends React.Component {
	render() {
		return(
			<Container>
				<Row>
					<Col xsOffset={1}>
						<RedH1> Hey!</RedH1>
					</Col>
				</Row>
				<Row>
					<Col xsOffset={1} xs={10}>
						<Description>  I am an artist and developer from Mexico City. I studied Electronic Production and Music Therapy at Berklee College of Music. Projects that attempt to bend and break the mold drive and motivate me. Experimentation is my true calling. I am enthusiastic about learning new tools and ideas to synthesize an end product or digital experience. </Description>
						<br/>
						<Tag> Let's make something together! </Tag>
					</Col>
				</Row>
			</Container>
		);
	}
}