import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';

const Img = styled.img`
	width: 100%;
	height: 66%;
	max-width: 912px;
	z-index: 0;
	/*margin: auto;*/
	/*min-height: 900px;*/
`;

export default class Home extends React.Component {
	render() {
		return(
			<Row center="xs">
				<Img src="https://res.cloudinary.com/julsgc/image/upload/v1493303029/ICCD_B-52_b2bzpt.jpg"/>
			</Row>
		);
	}
}