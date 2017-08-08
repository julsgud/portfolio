import React from 'react';

import TextLink from 'components/TextLink';

import {Container, Img, CardTextContainer, Title, Subtitle, HardRow, Text} from './unique-components';

let width;

if (window.innerWidth < 668) {
	width = window.innerWidth - (16*4);
} else if (window.innerWidth < 900) {
	width = window.innerWidth*.5;
} else {
	width = 450;
}

// Card Component Elements
// Elements are used together to create presentational component
// for a project.

const CardContainer = ({children}) => {
	return (
		<Container>
			{children}
		</Container>
	);
}

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

const CardTitle = (props) => {
	return(
		<Title href="https://www.plasticsrev.club"> {props.text} </Title>
	);
}

const CardSubtitle = (props) => {
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

const CardPrimaryText = (props) => {
	return(
		<Text style={{marginBottom: '.75em'}}> <b>Tools:</b> {props.text} </Text>
	);
}
const CardSecondaryText = (props) => {
	return(
		<Text> <b>Twist:</b> {props.text} </Text>
	);
}

export {CardContainer, CardMedia, CardTextContainer, CardTitle, CardSubtitle, CardPrimaryText, CardSecondaryText};