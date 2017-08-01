import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';

import ContactForm from 'components/ContactForm';
import IconLink from 'components/IconLink';

const ContactContainer = styled(Col)`
	width: 82%;
	margin: 0 1.75em 2em 1.75em;
`;

const Title = styled.div`
	font-weight: 300;
	font-size: 1.5em;
	margin-bottom: 1em;
`;

const icon = styled.i`
	font-size: 3em;
	font-weight: 300;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
`;

const SocialMediaRow = styled(Row)`
	margin: 0 1em 1em 1em;
`;

const IconLinkStyled = styled(IconLink)`
	font-weight: 400;
	text-align: center;
	font-size: 2em;
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
			<ContactContainer>
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