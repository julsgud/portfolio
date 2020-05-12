import {Col} from 'react-flexbox-grid';
import styled, {keyframes} from 'styled-components';
import {fadeInDown} from 'react-animations';

import media from 'src/styles';

const ani = keyframes`${fadeInDown}`;

const AboutContainer = styled(Col)`
	margin: 0 1.75em 2em 1.75em;

	${media.medium`
		margin-top: 4em;
		margin-left: -2em;
	`};
`;

const RedTitle = styled.div`
	color: rgba(251, 74, 35, 1);
	font-weight: 400;
	font-size: 1.5em;
	margin-bottom: 1em;
	animation: 1.5s ${ani};
`;

const Description = styled.p`
	font-weight: 300;
	font-size: 1em;
	letter-spacing: .2px;
	text-align: left;
`;

export {AboutContainer, RedTitle, Description};