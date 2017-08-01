import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';

import TextLink from 'components/TextLink';

const Container = styled(Col)`
	text-align: left;
	margin: 0 1.75em 2em 1.75em;
`;

const CardContainer = ({children}) => {
	return (
		<Container>
			{children}
		</Container>
	);
}

const width = window.innerWidth - (16*3.5);

const Img = styled.img`
	width: ${width + "px"};
`;

const CardMedia = (props) => {
	const {src, type} = props;
	
	if (type == 'video') {
		const fullSrc = "https://www.youtube.com/embed/" + src + "?showinfo=0";
		return(
			<div className="container">
				<iframe className="player" type="text/html" width={width} height="200" src={fullSrc} frameBorder="0" allowFullScreen/>
			</div>
		);
	} else if (type == 'playlist') {
		const fullSrc = "https://www.youtube.com/embed/" + src;
		return(
			<div className="container">
				<iframe className="player" type="text/html" width={width} height="200" src={fullSrc} frameBorder="0" allowFullScreen/>
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
	font-weight: 400;
	font-size: 1.5em;
	letter-spacing: 1px;
	text-decoration: none;
	color: rgba(29, 29, 29,1);
`;

const CardTitle = (props) => {
	return(
		<Title href="https://www.plasticsrev.club"> {props.text} </Title>
	);
}

const Subtitle = styled.div`
	font-weight: 300;
	font-size: 1.12em;
	margin-bottom: .75em;
`;

const HardRow = styled(Row)`
	margin-left: 0;
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
	text-align: left;
	font-weight: 300;
	font-size: 1em;
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