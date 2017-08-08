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

const Subtitle = styled.div`
	font-weight: 300;
	font-size: 1em;

	${media.medium`
		font-size: .8em;
	`};

	${media.large`
		font-size: 1em;
	`};
`;

const icon = styled.p`
	font-size: 4em;
	font-weight: 300;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
`;

const LinkContactRow = styled.a`
	display: flex;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	font-size: 1em;
	margin: 1em 1em 1em 0;
	padding: 0;
	color: rgba(29, 29, 29, .95);
	text-decoration: none;
	cursor: pointer;
	cursor: hand;

	&:hover {
		color: rgba(122, 220, 220, 1);
	};
`;

const ContactRow = styled(Row)`
	font-size: 1em;
	margin: 1em 1em 1em 0;
	padding: 0;
`;

const SocialMediaRow = styled(Row)`
	margin: 1em 1em 1em 1em;
	padding: 0;
`;

const IconLinkStyled = styled(IconLink)`
	font-weight: 400;
	font-size: 1.2em;
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
		font-size: 1em;
	`};
`;

export default class Contact extends React.Component {
	constructor() {
		super();

		this.sendEmail = this.sendEmail.bind(this);
	}

	sendEmail(data) {
		window.emailjs.send("gmail", "basic", data);
		this.props.history.push("contact/success");
	}

	render() {
		return(
			<ContactContainer xs={12}>
				<Title> Let's connect... </Title>
				<ContactRow start='xs'>
					<Col xs={1} style={{padding: 0}}>
						<i className="fa fa-envelope" aria-hidden="true"></i>
					</Col>
					<Col xs={11} style={{padding: 0}}>
						<Subtitle>julsgud@gmail.com </Subtitle>
					</Col>
				</ContactRow>
				<ContactRow>
					<Col xs={1} style={{padding: 0}}>
						<i className="fa fa-phone" aria-hidden="true"></i>
					</Col>
					<Col xs={11} style={{padding: 0}}>
						<Subtitle>+52155-1291-3782 </Subtitle>
					</Col>
				</ContactRow>
				<LinkContactRow href="https://github.com/julsgud">
					<Col xs={1} style={{padding: 0, fontSize: '1.2em'}}>
						<i className="fa fa-github" aria-hidden="true"></i>
					</Col>
					<Col xs={11} style={{padding: 0, margin: 'auto 0'}}>
						<Subtitle>julsgud </Subtitle>
					</Col>
				</LinkContactRow>
				<LinkContactRow href="https://www.instagram.com/iccdragons/">
					<Col xs={1} style={{padding: 0, fontSize: '1.2em'}}>
						<i className="fa fa-instagram" aria-hidden="true"></i>
					</Col>
					<Col xs={11} style={{padding: 0, margin: 'auto 0'}}>
						<Subtitle> @iccdragons </Subtitle>
					</Col>
				</LinkContactRow>
				<ContactForm emailHandler={this.sendEmail}/>
			</ContactContainer>
		);
	}
}