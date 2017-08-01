import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';
import {Form, Text, Textarea} from 'react-form';

import media from 'styles';

const TextInput = styled(Text)`
	width: 100%;
	font-size: 1.2em;
	font-weight: 300;
	letter-spacing: 1px;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
	margin-top: .5em;
	margin-bottom: .5em;
	border: .3px solid rgba(29, 29, 29, .3);
	border-radius: 5px;

	::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  		font-size: .8em;
  		padding: 0 .25em;
  		color: rgba(29, 29, 29, .66);
	}
	::-moz-placeholder { /* Firefox 19+ */
  		font-size: .8em;
  		padding: 0 .25em;
  		color: rgba(29, 29, 29, .66);	}

  	${media.medium`
		font-size: 1em;
	`};

	${media.large`
		font-size: 1.2em;
	`};
`;

const TextArea = styled(Textarea)`
	width: 100%;
	height: 8em;
	font-size: 1.2em;
	font-weight: 300;
	letter-spacing: 1px;
	margin-top: .5em;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
	border: .3px solid rgba(29, 29, 29, .3);
	border-radius: 5px;
	resize: none;

	::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  		font-size: .8em;
  		padding: .2em .25em;
  		color: rgba(29, 29, 29, .66);
	}
	::-moz-placeholder { /* Firefox 19+ */
  		font-size: .8em;
  		padding: .2em .25em;
  		color: rgba(29, 29, 29, .66);
	}

	${media.medium`
		font-size: 1em;
	`};

	${media.large`
		font-size: 1.2em;
	`};
`;

const Button = styled.button`
	width: 100%;
	max-width: 8em;
	overflow: visible;
	margin: auto;
	margin-top: 1em;
	padding: 8px 8px;
	border: 0;
	background: transparent;
	font-size: 1.5em;
	line-height: normal;
	cursor: pointer;
	-moz-user-select: text;
	display: block;
	text-decoration: none;
	background-color: rgba(122, 220, 220, 1);
	color: #fff;
	border: 2px solid rgba(122, 220, 220, 1);
	border-radius: 5px;
	margin-bottom: .5em;
	-webkit-transition: all .5s ease;
	transition: all .5s ease;

	${media.medium`
		font-size: 1em;
	`};

	${media.large`
		font-size: 1.2em;
	`};
`;

const icon = styled.i`
	font-size: 2em;
	font-weight: 300;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
`;

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
		      			<Button type='submit'> <icon className="fa fa-paper-plane-o" aria-hidden="true"></icon></Button>
			    	</form>
				  )
				}}
			</Form>
	);
}

export default ContactForm;