import React from 'react';
import styled from 'styled-components';

import {CardContainer, CardMedia, CardTextContainer, CardTitle, CardSubtitle, CardPrimaryText, CardSecondaryText} from 'components/Card';

const Project = (props) => {
	return(
		<CardContainer>
			<CardTitle linkTo={props.titleLink} text={props.title}/>
			<CardMedia type={props.mediaType} src={props.mediaSrc} link={props.link}/>
			<CardTextContainer>
				<CardSubtitle text={props.description} collab={props.collab} collabLink={props.collabLink}/>
				<CardPrimaryText text={props.tools}/>
				<CardSecondaryText text={props.technicalTwist}/>
			</CardTextContainer>
		</CardContainer>
	);
};

export default Project;