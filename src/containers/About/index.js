import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled, {keyframes} from 'styled-components';
import {fadeInDown} from 'react-animations';

import media from 'styles';

const ani = keyframes`${fadeInDown}`;

const AboutContainer = styled(Col)`
	margin: 0 1.75em 2em 1.75em;

	${media.medium`
		margin-top: 4em;
		margin-left: -2em;
	`};
`;

const RedTitle = styled.div`
	color: rgba(251, 74, 35, 1);
	font-weight: 400;
	font-size: 1.5em;
	margin-bottom: 1em;
	animation: 1.5s ${ani};
`;

const Description = styled.p`
	font-weight: 300;
	font-size: 1em;
	letter-spacing: .2px;
	text-align: left;
`;

const Tag = styled(Description)`
`;


export default class About extends React.Component {
	render() {
		return(
			<Row>
				<AboutContainer>
					<Col xs={12}>
						<RedTitle> Hey!</RedTitle>
					</Col>
					<Col xs={12}>
						<Description>  I am an artist and developer from Mexico City. I studied Electronic Production and Music Therapy at Berklee College of Music. Projects that attempt to bend and break the mold drive and motivate me. Experimentation is my true calling. I am enthusiastic about learning new tools and ideas to synthesize an end product or digital experience. </Description>
						<Tag> Let's make something together! </Tag>
					</Col>
				</AboutContainer>
			</Row>
		);
	}
}