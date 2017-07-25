import React from 'react';
import styled from 'styled-components';

const A = styled.a`
	color: rgba(29, 29, 29, 1);
	font-weight: 300;
	font-size: 16px;
	margin: 0;
	margin-left: 8px;
	text-decoration: underline;
	cursor: pointer;
	cursor: hand;
	position: relative;
`;

const TextLink = (props) => {
	let {text, link} = props;
	// console.log(link);
	return (
		<A target="_blank" href={link}> {text} </A>
	);
};

export default TextLink;