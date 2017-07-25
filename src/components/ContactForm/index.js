import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';
import {Form, Text, Textarea} from 'react-form';

const TextInput = styled(Text)`
	font-size: 16px;
	font-weight: 300;
	letter-spacing: .5px;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
	margin-top: 12px;
	margin-bottom: 12px;
	border: .5px solid rgba(29, 29, 29, .3);
`;

const TextArea = styled(Textarea)`
	font-size: 16px;
	font-weight: 300;
	letter-spacing: .5px;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
	border: .5px solid rgba(29, 29, 29, .3);
	resize: none;
`;

const Button = styled.button`
	overflow: visible;
	  margin: 0;
	  padding: 0;
	  border: 0;
	  background: transparent;
	  font: inherit;
	  line-height: normal;
	  cursor: pointer;
	  -moz-user-select: text;
	  display: block;
	  text-decoration: none;
	  text-transform: uppercase;
	  padding: 16px 12px;
	  background-color: rgba(122, 220, 220, 1);
	  color: #fff;
	  border: 2px solid rgba(122, 220, 220, 1);
	  border-radius: 6px;
	  margin-bottom: 16px;
	  -webkit-transition: all .5s ease;
	  transition: all .5s ease;
`;

const icon = styled.i`
	font-size: 32px;
	font-weight: 300;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
`;

const ContactForm = (props) => {
	return (
			<Form
			    onSubmit={(data) => {
			      // props.emailHandler(data);
			      console.log(data);
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
			      		<TextInput field='name' placeholder="Name..."/>
		      			<TextInput field='email' placeholder="Email..."/>
		      			<TextArea field='body' placeholder="What's on your mind?"/>
		      			<Button type='submit'> <icon className="fa fa-paper-plane-o" aria-hidden="true"></icon></Button>
			    	</form>
				  )
				}}
			</Form>
	);
}

export default ContactForm;