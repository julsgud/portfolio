import styled, {keyframes} from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';
import {fadeInRight} from 'react-animations';
import media from 'styles';

const ani = keyframes`${fadeInRight}`;

const ContactContainer = styled(Col)`
	margin: 0 1.75em 2em 1.75em;
	padding: 0;

	${media.medium`
		margin-top: 3em;
		width: 80%;
	`};

	${media.large`
		margin-top: 3em;
		margin-left: -1em;
		width: 80%;
	`};
`;

const Title = styled.div`
	font-weight: 300;
	font-size: 1.5em;

	${media.medium`
		font-size: 1.2em;
	`};

	${media.large`
		font-size: 1.5em;
	`};

	animation: 1.5s ${ani};
`;

const Subtitle = styled.div`
	font-weight: 300;
	font-size: 1em;

	${media.medium`
		font-size: .8em;
	`};

	${media.large`
		font-size: 1em;
	`};
`;

const Icon = styled(Col)`
	font-size: 1.2em;
	font-weight: 300;
	padding: 0;
	color: rgba(29, 29, 29, 1);
`;

const Info = styled(Col)`
	padding: 0;
	margin: auto 0;
`;

const LinkContactRow = styled.a`
	display: flex;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	font-size: 1em;
	margin: 1em 1em 1em 0;
	padding: 0;
	color: rgba(29, 29, 29, .95);
	text-decoration: none;
	cursor: pointer;
	cursor: hand;

	&:hover {
		color: rgba(122, 220, 220, 1);
	};
`;

const ContactRow = styled(Row)`
	font-size: 1em;
	margin: 1em 1em 1em 0;
	padding: 0;
`;

export {ContactContainer, Title, Subtitle, Icon, Info, LinkContactRow, ContactRow};