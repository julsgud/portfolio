import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled, {keyframes} from 'styled-components';
import update from 'immutability-helper';
import {ViewPager, Frame, Track, View} from 'react-view-pager';
import {fadeIn} from 'react-animations';

import media from 'styles';

import json from './projects.json';
import Project from 'components/Project'

const ani = keyframes`${fadeIn}`;

const WorkContainer = styled(Col)`
	margin: 0 1.75em 2em 1.75em;

	${media.medium`
		margin-top: 3em;
		margin-left: -2em;
		marging-bottom: 0;
	`};

	animation: 1.5s ${ani};
`;

const carouselSettings = {
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

	componentDidMount() {
		window.onresize = () => {
			console.log('resize');
			this.forceUpdate();
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
						    <Arrow onClick={() => this.track.prev()}> &#x2190; </Arrow>
						    <Arrow onClick={() => this.track.next()}> &#x2192; </Arrow>
						</nav>
					</ViewPager>
				</WorkContainer>
			</Row>
		);
	}
}	