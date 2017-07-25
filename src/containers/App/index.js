import React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';

import About from 'containers/About';
import Work from 'containers/Work';
import Contact from 'containers/Contact';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const Container = styled.div`
	width: 100%;
	height: 100%;
	max-width: 920px;
	background: #fdfdfd;
	z-index: 0;
	display: flex;
	flex-direction: row;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
	margin: 0 auto;
	padding: 0;
	/*font-family: 'Lato', sans-serif;*/
`;

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			lang: 'ES'
		}
	}

	componentWillMount() {
		window.emailjs.init("user_ivBQ7HFvKfldMbtGxGbBt");
	}

	render() {
		return(
			<Container>
				<Col xs={3}>
					<Sidebar/>
				</Col>
				<Col xs={9}>
					<Route exact path="/" component={About}/>
					<Route exact path="/work" render={() =>
						<Work lang={this.state.lang}/>
					}/>
					<Route exact path="/contact" render={() =>
						<Contact lang={this.state.lang}/>
					}/>
				</Col>
			</Container>
		);
	}
}