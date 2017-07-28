import React from 'react';
import styled from 'styled-components';

const A = styled.a`
	color: rgba(29, 29, 29, 1);
	font-weight: 300;
	text-decoration: none;
	cursor: pointer;
	cursor: hand;
`;

const I = styled.i`
`;

const IconLink = (props) => {
	let {link, icon, className} = props;

	return (
		<A className={className} target="_blank" href={link}> <I className={"fa fa-" + icon}></I> </A>
	);
};

export default IconLink;