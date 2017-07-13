import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import update from 'immutability-helper';
import {ViewPager, Frame, Track, View} from 'react-view-pager';

import json from './projects.json';
import Project from 'components/Project'

const Container = styled(Col)`
	margin: 0;
	margin-top: 50px;
`;

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
}

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
			mediaSrc: projects[0].mediaSrc,
			link: projects[0].link
		}

		return(
			<Container>
				<Row center="xs">
					<ViewPager>
						<Frame>
							<Track ref={c => this.track = c} viewsToShow={1} infinite>
								<View> <Project {...props}/> </View>
							</Track>
						</Frame>
						<nav className="pager-controls">
						    <a className="pager-control pager-control--prev"
						      onClick={() => this.track.prev()}>👈🏾</a>
						    <a className="pager-control pager-control--next"
						      onClick={() => this.track.next()}>👉🏾</a>
						</nav>
					</ViewPager>
				</Row>
			</Container>
		);
	}
}