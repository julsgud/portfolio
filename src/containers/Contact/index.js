import React from 'react';
import ContactForm from 'components/ContactForm';
import {ContactContainer, Title, Subtitle, Icon, Info, LinkContactRow, ContactRow} from './unique-components';

// Contact Component
// Renders info and contact form that sends email using Email.js

export default class Contact extends React.Component {
	constructor() {
		super();

		this.sendEmail = this.sendEmail.bind(this);
	}

	componentDidMount() {
		window.emailjs.init("user_ivBQ7HFvKfldMbtGxGbBt");
	}

	sendEmail(data) {
		window.emailjs.send("gmail", "basic", data);
		this.props.history.push("contact/success");
	}

	render() {
		return(
			<ContactContainer xs={12}>
				<Title> Let's connect... </Title>
				<LinkContactRow href="https://github.com/julsgud" target="_blank">
					<Icon xs={1}>
						<i className="fa fa-github" aria-hidden="true"></i>
					</Icon>
					<Info xs={11}>
						<Subtitle>julsgud </Subtitle>
					</Info>
				</LinkContactRow>
				<LinkContactRow href="https://www.instagram.com/iccdragons/" target="_blank">
					<Icon xs={1}>
						<i className="fa fa-instagram" aria-hidden="true"></i>
					</Icon>
					<Info xs={11}>
						<Subtitle> @iccdragons </Subtitle>
					</Info>
				</LinkContactRow>
				<ContactRow>
					<Icon xs={1}>
						<i className="fa fa-phone" aria-hidden="true"></i>
					</Icon>
					<Info xs={11}>
						<Subtitle>+52155-1291-3782 </Subtitle>
					</Info>
				</ContactRow>
				<ContactRow start='xs'>
					<Icon xs={1} style={{fontSize: '1em'}}>
						<i className="fa fa-envelope" aria-hidden="true"></i>
					</Icon>
					<Info xs={11}>
						<Subtitle>julsgud@gmail.com </Subtitle>
					</Info>
				</ContactRow>
				<ContactForm emailHandler={this.sendEmail}/>
			</ContactContainer>
		);
	}
}