import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';

const CardContainer = ({children}) => {
	return (
		<Row>
			{children}
		</Row>
	);
}

const Img = styled.img`
	width: 100%;
`;

const CardMedia = (props) => {
	const {src, type} = props;

	if (type == 'video') {
		return(
			<Col xs={12}>
			</Col>
		);
	} else {
		return(
			<Col xs={12}>
				<Img src={props.src}></Img>
			</Col>
		);
	}
}

const CardTitle = (props) => {
	return(
		<Col xsOffset={1} xs={10}>
			<h3> props.text </h3>
		</Col>
	);
}

const CardSubtitle = (props) => {
	return(
		<Col xsOffset={1} xs={10}>
			<h5> props.text </h5>
		</Col>
	);
}

const CardDescription = (props) => {
	return(
		<Col xsOffset={1} xs={10}>
			<p> props.text </p>
		</Col>
	);
}

export {CardContainer, CardMedia, CardTitle, CardSubtitle, CardDescription};