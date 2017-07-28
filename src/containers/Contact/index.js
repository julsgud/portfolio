import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';

import ContactForm from 'components/ContactForm';

const Container = styled(Col)`
	margin-top: 50px;
`;

const H1 = styled.h1`
	font-weight: 300;
	font-size: 24px;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const icon = styled.i`
	font-size: 48px;
	font-weight: 300;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
`;

export default class Contact extends React.Component {
	constructor() {
		super();

		this.sendEmail = this.sendEmail.bind(this);
	}

	sendEmail(data) {
		window.emailjs.send("gmail", "basic", data);
	}

	render() {
		return(
			<Container xs={11}>
				<H1> Let's connect! </H1> 
				<ContactForm emailHandler={this.sendEmail}/>
			</Container>
		);
	}
}