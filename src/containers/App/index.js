import React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';

import Home from 'containers/Home';
import Work from 'containers/Work';
import Header from 'components/Header';

const Container = styled.div`
	width: 100%;
	height: 100%;
	background: #fff;
	z-index: 0;
	display: flex;
	flex-direction: column;

	font-family: 'Roboto Mono', monospace;
	/*font-family: 'Andika', sans-serif;*/
`;

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			lang: 'ES'
		}
	}

	render() {
		return(
			<Container>
				<Header/>
				<Route exact path="/" component={Home}/>
				<Route exact path="/work" render={() =>
					<Work lang={this.state.lang}/>
				}/>
			</Container>
		);
	}
}