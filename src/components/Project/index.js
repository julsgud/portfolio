import React from 'react';
import styled from 'styled-components';

import {CardContainer, CardMedia, CardTitle, CardSubtitle, CardDescription} from 'components/Card';

const Project = (props) => {
	return(
		<CardContainer>
			<CardMedia type={props.mediaType} src={props.mediaSrc}/>
			<CardTitle linkTo={props.titleLink} text={props.title}/>
			<CardSubtitle text={props.subtitle}/>
			<CardDescription text={props.description}/>
		</CardContainer>
	);
};

export default Project;