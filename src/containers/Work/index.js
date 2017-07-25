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

const Arrow = styled.a`
	font-size: 32px;
	cursor: pointer;
	cursor: hand;
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
		const projects = [];
		const props = [];

		if (this.state.projects) {
			this.state.projects.forEach((p, i) => {
				projects.push(<View key={i}> <Project {...p}/> </View>);
			});
		} 

		

		return(
			<Container>
				<Row center="xs">
					<ViewPager>
						<Frame>
							<Track ref={c => this.track = c} viewsToShow={1} infinite>
								{projects}
							</Track>
						</Frame>
						<nav className="pager-controls">
						    <Arrow onClick={() => this.track.prev()}> &#x2190; </Arrow>
						    <Arrow onClick={() => this.track.next()}> &#x2192; </Arrow>
						</nav>
					</ViewPager>
				</Row>
			</Container>
		);
	}
}