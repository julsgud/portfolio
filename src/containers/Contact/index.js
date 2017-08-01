import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled, {keyframes} from 'styled-components';
import {fadeInRight} from 'react-animations';

import media from 'styles';

import ContactForm from 'components/ContactForm';
import IconLink from 'components/IconLink';

const ani = keyframes`${fadeInRight}`;

const ContactContainer = styled(Col)`
	margin: 0 1.75em 2em 1.75em;
	padding: 0;

	${media.medium`
		margin-top: 3em;
		width: 80%;
	`};

	${media.large`
		margin-top: 3em;
		margin-left: -1em;
		width: 80%;
	`};
`;

const Title = styled.div`
	font-weight: 300;
	font-size: 1.5em;

	${media.medium`
		font-size: 1.2em;
	`};

	${media.large`
		font-size: 1.5em;
	`};

	animation: 1.5s ${ani};
`;

const icon = styled.i`
	font-size: 3em;
	font-weight: 300;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
`;

const SocialMediaRow = styled(Row)`
	margin: 1em 1em 1em 1em;
	padding: 0;
`;

const IconLinkStyled = styled(IconLink)`
	font-weight: 400;
	text-align: center;
	font-size: 1.6em;
	color: rgba(29,29,29,.95);
	text-decoration: none;
	&:hover {
		color: rgba(122, 220, 220, 1);
	};
	&:active {
		text-decoration: underline;
		color: rgba(251, 74, 35, 1);
	};

	${media.medium`
		font-size: 1.5em;
	`};
`;

export default class Contact extends React.Component {
	constructor() {
		super();

		this.sendEmail = this.sendEmail.bind(this);
	}

	sendEmail(data) {
		// window.emailjs.send("gmail", "basic", data);
		this.props.history.push("contact/success");
	}

	render() {
		return(
			<ContactContainer xs={12}>
				<Title> Let's connect! </Title>
				<SocialMediaRow center="xs">
					<Col xs={4}>
						<IconLinkStyled link="https://github.com/julsgud" icon="github"/>
					</Col>
					<Col xs={4}>
						<IconLinkStyled link="https://www.instagram.com/iccdragons/" icon="instagram"/>
					</Col>
					<Col xs={4}>
						<IconLinkStyled link="https://www.facebook.com/juls.gc" icon="facebook"/>
					</Col>
				</SocialMediaRow>
				<ContactForm emailHandler={this.sendEmail}/>
			</ContactContainer>
		);
	}
}