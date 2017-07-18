import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';
import Youtube from 'react-youtube';

const Container = styled(Col)`
	text-align: left;
	margin: 0 auto;
	padding: 0;
	max-width: 400px;
	border-style: solid;
	border-width: 0px;
/*	-webkit-box-shadow: 0px 11px 30px -8px rgba(29,29,29,1);
	moz-box-shadow: 0px 11px 30px -8px rgba(29,29,29,1);
	box-shadow: 0px 11px 30px -8px rgba(29,29,29,1);*/
`;

const CardContainer = ({children}) => {
	return (
		<Container>
			{children}
		</Container>
	);
}

const Img = styled.img`
	margin: 0;
	margin-top: 6px;
	width: 100%;
`;

const opts = {
	width: '400',
	height: '200'
}

const CardMedia = (props) => {
	const {src, type} = props;

	if (type == 'video') {
		return(
			<Youtube videoId={props.mediaSrc} opts={opts}/>
		);
	} else {
		return(
			<a target="_blank" href={props.link}>
				<Img src={props.src}></Img>
			</a>
		);
	}
}

const CardTextContainer = styled(Col)`

`;

const Title = styled.div`
	letter-spacing: 1px;
	text-decoration: none;
	color: rgba(29, 29, 29,1);
	font-weight: 400;
	font-size: 24px;
`;

const CardTitle = (props) => {
	return(
		<Title href="https://www.plasticsrev.club"> {props.text} </Title>
	);
}

const Subtitle = styled.div`
	font-weight: 300;
	font-size: 16px;
	margin: 0;
	margin-bottom: 10px;
`;

const CardSubtitle = (props) => {
	return(
		<Subtitle> {props.text} </Subtitle>
	);
}

const Text = styled.div`
	text-align: justify;
	font-weight: 300;
	font-size: 14px;
	margin: 0;
`;

const CardPrimaryText = (props) => {
	return(
		<Text> <b>Tools:</b> {props.text} </Text>
	);
}
const CardSecondaryText = (props) => {
	return(
		<Text> <b>Twist:</b> {props.text} </Text>
	);
}

export {CardContainer, CardMedia, CardTextContainer, CardTitle, CardSubtitle, CardPrimaryText, CardSecondaryText};