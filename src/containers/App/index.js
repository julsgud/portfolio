import React from 'react';
import {Route} from 'react-router-dom';
import styled, {css} from 'styled-components';
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
	background: #f4f1ec;
	z-index: 0;
	display: flex;
	flex-direction: row;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
	font-size: 16px;
	margin: 0 auto;
	padding: 0;
	/*font-family: 'Lato', sans-serif;*/
`;

const MainContainer = styled(Col)`
	margin: 0;
	padding: 0;
	background-color: #fdfdfd;
	color: rgba(29, 29, 29, 1);
	font-family: 'Roboto Mono', monospace;
	font-size: 16px;
`;

const HR = styled(Row)`
	margin: 2.5em 1.75em 2em 1.75em;
	padding: 0;
	border: 0;
	clear:both;
	height: 1px;              
	background-color:rgba(29, 29, 29, .8);
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
				<MainContainer>
					<Sidebar/>
					<HR/>
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