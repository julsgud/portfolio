import React from 'react';
import styled from 'styled-components';

const A = styled.a`
	color: rgba(29, 29, 29, 1);
	font-weight: 300;
	font-size: 16px;
	margin: 0;
	margin-left: 8px;
	text-decoration: none;
	cursor: pointer;
	cursor: hand;
`;

const I = styled.i`
	margin: 0;
	padding: 0;
`;

const IconLink = (props) => {
	let {link, icon} = props;

	return (
		<A target="_blank" href={link}> <I className={"fa fa-" + icon}></I> </A>
	);
};

export default IconLink;