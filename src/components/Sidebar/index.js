import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';

import media from 'styles/';
import IconLink from 'components/IconLink';

const AvatarNavContainer = styled(Col)`
	margin-top: 1.5em;
`;

const Img = styled.img`
	width: 90%;
	height: 90%;
`;

const Name = styled.div`
	font-weight: 400;
	font-size: 1.5em;
	letter-spacing: .1em;
	margin-top: .5em;
	margin-bottom: .4em;
`;

const Title = styled.div`
	font-weight: 300;
	font-size: 1.06em;
	letter-spacing: .05em;
	margin-bottom: .2em;
	margin-top: .2em;

`;

const BlueTitle = styled(Title)`
	color: rgba(122, 220, 220, 1);
	margin-right: 1.3em;
`;

const NavBar = styled(Row)`
	margin: auto;
	margin-top: 1.25em;
`;

const PillLink = styled(NavLink)`
	font-weight: 400;
	font-size: 1em;
	color: rgba(29,29,29,1);
	text-decoration: none;
	&:hover {
		color: rgba(122, 220, 220, 1);
	};
	&:active {
		text-decoration: underline;
		color: rgba(251, 74, 35, 1);
	};
`;

const Divider = styled.div`
	margin: 0;
	padding: 0;
	font-weight: 700;
	font-size: 1em;
`;

const activeLinkStyle = {
	textDecoration: "underline",
	color: "#7adcdc"
};

const HR = styled.hr`

`;

export default class Sidebar extends React.Component {
	render() {
		return(
			<Row center="xs">
				<AvatarNavContainer xs={8}>
					<Row center="xs">
						<Img src="http://res.cloudinary.com/julsgc/image/upload/v1499787752/ICCD_B-52_b2bzpt_Cropped_ktaijn.jpg"></Img>
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
					<NavBar around="xs" center="xs">
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