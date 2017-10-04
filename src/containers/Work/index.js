import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import update from 'immutability-helper';
import {ViewPager, Frame, Track, View} from 'react-view-pager';
import Project from 'components/Project'

import {WorkContainer, Arrow} from './unique-components';

import json from './projects.json';

const carouselSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
}

// Work Component
// Passes project info from JSON to Project Component
// and renders as a carousel using react-view-pager

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
		const projects = [];

		if (this.state.projects) {
			this.state.projects.forEach((p, i) => {
				projects.push(<View key={i}> <Project {...p}/> </View>);
			});
		} 

		return(
			<Row center="xs">
				<WorkContainer xs={12}>
					<ViewPager>
						<Frame>
							<Track ref={c => this.track = c} viewsToShow={1} infinite>
								{projects}
							</Track>
						</Frame>
						<nav className="pager-controls">
						    <Arrow onClick={() => this.track.prev()}> <i className="fa fa-long-arrow-left" aria-hidden="true"></i> </Arrow>
						    <Arrow onClick={() => this.track.next()}> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
 </Arrow>
						</nav>
					</ViewPager>
				</WorkContainer>
			</Row>
		);
	}
}	