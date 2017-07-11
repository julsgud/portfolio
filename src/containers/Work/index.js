import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import update from 'immutability-helper';

import json from './projects.json';

const Img = styled.img`
	width: 100%;
	height: 66%;
	max-width: 912px;
	z-index: 0;
	/*margin: auto;*/
	/*min-height: 900px;*/
`;

export default class Work extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: null
		};
	}

	componentDidMount() {
		if(this.props.lang == 'ES') {
			let newState = update(this.state, {
				projects: {$set: json.proyectos}
			});
			this.setState(newState);
		}
	}

	render() {
		let projects = [];

		if (this.state.projects) {
			this.state.projects.forEach((p) => {
				
			});
		} 

		return(
			<Row center="xs">
				<h1> Work </h1>
			</Row>
		);
	}
}