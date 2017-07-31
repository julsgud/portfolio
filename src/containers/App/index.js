import React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';

import About from 'containers/About';
import Work from 'containers/Work';
import Contact from 'containers/Contact';
import Success from 'containers/Success';

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

const MainContainer = styled(Row)`
	margin: 0;
	padding: 20;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
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
		if (window.innerWidth < 668) {
			return(
				<MainContainer center="xs">
					<Sidebar/>
					<Route exact path="/" component={About}/>
					<Route exact path="/work" render={() =>
						<Work lang={this.state.lang}/>
					}/>
					<Route exact path="/contact" render={({history}) =>
						<Contact lang={this.state.lang} history={history}/>
					}/>
					<Route exact path="/contact/success" lang={this.state.lang} render={() => 
						<Success/>
					}/>
				</MainContainer>
			);
		} else {
			return(
				<Container>
					<Col xs={5}>
						<Sidebar/>
					</Col>
					<Col xs={7}>
						<Route exact path="/" component={About}/>
						<Route exact path="/work" render={() =>
							<Work lang={this.state.lang}/>
						}/>
						<Route exact path="/contact" render={({history}) =>
							<Contact lang={this.state.lang} history={history}/>
						}/>
						<Route exact path="/contact/success" lang={this.state.lang} render={() => 
							<Success/>
						}/>
					</Col>
				</Container>
			);
		}
	}
}