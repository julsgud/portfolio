import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';

const ColContainer = styled(Col)`
	margin: 0 auto;
	max-width: 900;
	padding: 0;
	background-color: #fff;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
	font-size: 16px;
`;

const RowContainer = styled(Row)`
	max-width: 900px;
	margin: 0 auto;
	padding: 0;
	background-color: #fff;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
	font-size: 16px;
`;

const HR = styled(Row)`
	margin: 2.5em 1.75em 2em 1.75em;
	padding: 0;
	border: 0;
	clear:both;
	height: 1px;              
	background-color:rgba(29, 29, 29, .8);
`;

export {ColContainer, RowContainer, HR};