import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import update from 'immutability-helper';

import json from './projects.json';
import Project from 'components/Project'

const Container = styled(Col)`
	margin: 0;
	margin-top: 50px;
`;

export default class Work extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: null
		};
	}

	componentWillMount() {
		if(this.props.lang == 'ES') {
			let newState = update(this.state, {
				projects: {$set: json.projects}
			});
			this.setState(newState);
		}
	}

	render() {
		const projects = this.state.projects;

		// if (this.state.projects) {
		// 	this.state.projects.forEach((p) => {
				
		// 	});
		// } 

		let props = {
			title: projects[0].title,
			description: projects[0].description,
			tools: projects[0].tools,
			technicalTwist: projects[0].technicalTwist,
			mediaType: projects[0].mediaType,
			mediaSrc: projects[0].mediaSrc
		}

		return(
			<Container>
				<Row center="xs">
					{/*<Col xs={12}>
						<h1> Work </h1>
					</Col>*/}
				</Row>
				<Row center="xs">
					<Project {...props}/>
				</Row>
			</Container>
		);
	}
}