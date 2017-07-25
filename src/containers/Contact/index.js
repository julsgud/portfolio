import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';

import ContactForm from 'components/ContactForm';

const H1 = styled.h1`
	font-weight: 300;
	font-size: 32px;
	margin-top: 10px;
	margin-left: 15px;
	margin-bottom: 10px;
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
			<Row>
				<Col xs={12}>
				<H1> Let's connect </H1>
				
					<ContactForm emailHandler={this.sendEmail}/>
				</Col>
			</Row>
		);
	}
}