import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';

import ContactForm from 'components/ContactForm';
import IconLink from 'components/IconLink';

const Container = styled(Col)`
	margin-top: 50px;
`;

const H1 = styled.h1`
	font-weight: 300;
	font-size: 24px;
	margin-top: 10px;
	margin-bottom: 15px;
`;

const icon = styled.i`
	font-size: 48px;
	font-weight: 300;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
`;

const SocialMediaRow = styled(Row)`
	margin: 12px;
`;

const IconLinkStyled = styled(IconLink)`
	margin-bottom: 4px;
	font-weight: 400;
	text-align: center;
	font-size: 24px;
	color: rgba(29,29,29,1);
	text-decoration: none;
	&:hover {
		color: rgba(122, 220, 220, 1);
	};
	&:active {
		text-decoration: underline;
		color: rgba(251, 74, 35, 1);
	};
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
			<Container xs={10}>
				<H1> Let's connect... </H1>
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
			</Container>
		);
	}
}