import React from 'react';
import {Row, Col} from 'react-flexbox-grid';

import {AvatarNavContainer, Img, Name, Title, BlueTitle, NavBar, PillLink, Divider} from './unique-components';

const activeLinkStyle = {
	textDecoration: "underline",
	color: "#7adcdc"
};

// AvatarInfo Component
// Flexible component displaying info, image and navigation
// on small and large layouts.

export default class AvatarInfo extends React.Component {
	render() {
		return(
			<Row center="xs">
				<AvatarNavContainer xs={8}>
					<Row center="xs">
						<Img src="https://res.cloudinary.com/julsgc/image/upload/v1499787752/ICCD_B-52_b2bzpt_Cropped_ktaijn.jpg"></Img>
					</Row>
					<Row center="xs">
						<Name> Julio Gudiño </Name>
					</Row>
					<Row center="xs">
						<Title> Digital Production </Title>
					</Row>
					<Row center="xs">
						<BlueTitle> & </BlueTitle> <Title> Web Development </Title>
					</Row>
					<NavBar between="xs" center="xs">
						<PillLink to="/" exact activeStyle={activeLinkStyle}> About </PillLink>
						<Divider> | </Divider>
						<PillLink to="/work" activeStyle={activeLinkStyle}> Work </PillLink>
						<Divider> | </Divider>
						<PillLink to="/contact" activeStyle={activeLinkStyle}> Contact </PillLink>
					</NavBar>
				</AvatarNavContainer>
			</Row>
		);
	}
}