import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';
import Youtube from 'react-youtube';

import TextLink from 'components/TextLink';

const Container = styled(Col)`
	text-align: left;
	margin: 0 auto;
	padding: 0;
	max-width: 400px;
	border-style: solid;
	border-width: 0px;
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
		const fullSrc = "https://www.youtube.com/embed/" + src + "?showinfo=0";
		return(
			<div className="container">
				<iframe className="player" type="text/html" width="400" height="200" src={fullSrc} frameBorder="0" allowFullScreen/>
				 {/*<Youtube videoId={props.mediaSrc} opts={opts}/>*/}
			</div>
		);
	} else if (type == 'playlist') {
		const fullSrc = "https://www.youtube.com/embed/" + src;
		return(
			<div className="container">
				<iframe className="player" type="text/html" width="400" height="200" src={fullSrc} frameBorder="0" allowFullScreen/>
				 {/*<Youtube videoId={props.mediaSrc} opts={opts}/>*/}
			</div>
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

const HardRow = styled(Row)`
	margin-left: 0px;
`;

const CardSubtitle = (props) => {
	// console.log(props);
	if (props.collab) {
		return(
			<HardRow>
				<Subtitle> {props.text} </Subtitle> 
				<TextLink link={props.collabLink} text={props.collab}/>
			</HardRow>
		)
	} else {
		return(
			<Subtitle> {props.text} </Subtitle>
		);
	}
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