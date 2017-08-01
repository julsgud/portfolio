import React from 'react';
import styled from 'styled-components';

import media from 'styles';

const A = styled.a`
	color: rgba(29, 29, 29, .95);
	text-decoration: none;
	cursor: pointer;
	cursor: hand;
`;

const IconLink = (props) => {
	let {link, icon, className} = props;

	return (
		<A className={className} target="_blank" href={link}> <i className={"fa fa-" + icon}></i> </A>
	);
};

export default IconLink;