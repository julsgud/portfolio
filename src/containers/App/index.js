import React from 'react';
import {Route} from 'react-router-dom';
import {Row, Col} from 'react-flexbox-grid';

import About from 'containers/About';
import Work from 'containers/Work';
import Contact from 'containers/Contact';
import Success from 'containers/Success';

import AvatarInfo from 'components/AvatarInfo';

import {ColContainer, RowContainer, HR} from './unique-components';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			lang: 'EN'
		}
	}

	// Init email.js client for Contact Component
	// Deferred to Contact component for faster page load
	// componentWillMount() {
	// 	window.emailjs.init("user_ivBQ7HFvKfldMbtGxGbBt");
	// }

	// Trigger render on resize to adjust layout
	componentDidMount() {
		window.onresize = () => {
			this.forceUpdate();
		}
	}

	render() {
		if (window.innerWidth < 668) {
			return(
				<ColContainer>
					<AvatarInfo/>
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
				</ColContainer>
			);
		} else {
			return(
				<RowContainer>
					<Col xs={5}>
						<AvatarInfo/>
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
				</RowContainer>
			);
		}
	}
}