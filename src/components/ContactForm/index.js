import React from 'react';
import {Form} from 'react-form';
import {TextInput, TextArea, Button} from './unique-components';

// Contact Form
// Used to send email from client. Created
// with react-form, completes action using email.js

const ContactForm = (props) => {
	return (
			<Form
			    onSubmit={(data) => {
			      props.emailHandler(data);
			    }}
			    validate={({name, email, body}) => {
			      return {
			        name: !name ? 'A name is required' : undefined,
			        email: !email ? 'An email is required' : undefined,
			        body: !body ? 'Nothing to say?' : undefined
			      }
			    }}
			>
				{({submitForm}) => {
				  return (
			    	<form onSubmit={submitForm}>
			      		<TextInput field='name' placeholder="Name"/>
		      			<TextInput field='email' placeholder="Email"/>
		      			<TextArea field='body' placeholder="What do you wish to talk about?"/>
		      			<Button type='submit'> <i className="fa fa-paper-plane-o" aria-hidden="true"></i></Button>
			    	</form>
				  )
				}}
			</Form>
	);
}

export default ContactForm;