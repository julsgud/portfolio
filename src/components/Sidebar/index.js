import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import {Row, Col} from 'react-flexbox-grid';

import IconLink from 'components/IconLink';

const height = window.innerHeight;

const Container = styled(Row)`
	text-align: center;
	margin-top: 45px;

	@media (max-width: 668) {
		margin-top: 0px;
	}
`;

const width = window.innerWidth * .66 + "px";

const ImageTitleContainer = styled(Col)`
	width: ${width};
	margin: 0px;
`;

const CircleLink = styled(NavLink)`
	width: 200px;
	height: 200px;
	margin-top: 45px;
	margin-left: 30px;
	border: 5px solid rgba(251, 74, 35, 1);
	border: 0px solid rgba(122, 220, 220, 1);
	/*border: 5px solid rgba(29, 29, 29, .92);*/
	/*border: 5px solid rgba(0, 255, 162, 1);
	border: 5px solid rgba(109, 127, 127, 1);
	border: 5px solid rgba(218, 255, 255, 1);
	border: 5px solid rgba(71, 127, 127, 1);*/
	/*border-radius: 50%;*/
	
`;

const Img = styled.img`
	width: ${width};
	height: ${width};
`;

const spacing = window.innerWidth/75;

const Name = styled.h1`
	font-weight: 400;
	font-size: 24px;
	margin-top: 10px;
	margin-left: 0px;
	margin-bottom: 10px;
	letter-spacing: ${spacing + "px"};
`;

const Title = styled.h2`
	letter-spacing: ${spacing/1.5 + "px"};
	font-weight: 300;
	font-size: 16px;
	margin-bottom: 3px;
	margin-top: 3px;
`;

const BlueH2 = styled.h2`
	letter-spacing: ${spacing/1.5 + "px"};
	font-weight: 300;
	color: rgba(122, 220, 220, 1);
	font-size: 15px;
	margin-left: 0px;
	margin-bottom: 3px;
	margin-top: 3px;
	margin-right: 22px;
`;

const PillLink = styled(NavLink)`
	text-align: center;
	margin-bottom: 4px;
	font-weight: 400;
	line-height: 32px;
	text-align: center;
	font-size: 15px;
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

const Divider = styled(Col)`
	margin: 0;
	padding: 0;
	font-weight: 700;
	line-height: 32px;
	font-size: 15px;
`;

const navBarWidth = window.innerWidth + "px";

const NavBar = styled(Row)`
	margin: auto;
	margin-top: 13px;
	max-width: ${navBarWidth};
`;

const activeLinkStyle = {
	textDecoration: "underline",
	color: "#7adcdc"
};

export default class Sidebar extends React.Component {
	render() {
		return(
			<Container>
				<ImageTitleContainer>
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
						<BlueH2> & </BlueH2> <Title> Web Development </Title>
					</Row>
					<NavBar around="xs" center="xs">
						<PillLink to="/" exact activeStyle={activeLinkStyle}> About </PillLink>
						<Divider> | </Divider>
						<PillLink to="/work" activeStyle={activeLinkStyle}> Work </PillLink>
						<Divider> | </Divider>
						<PillLink to="/contact" activeStyle={activeLinkStyle}> Contact </PillLink>
					</NavBar>
				</ImageTitleContainer>
			</Container>
		);
	}
}