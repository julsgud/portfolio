import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {Row, Col} from 'react-flexbox-grid';

const leftMargin = 12;

const Container = styled(Col)`
	padding: 0;
	margin: 0;
	border-style: solid;
	border-color: #333;
	border: 0px;
	border-right: 1px;
`;

const ImageTitleContainer = styled(Col)`
	margin-top: 45px;
	margin-left: 30px;
`;

const CircleLink = styled(Link)`
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
	width: 180px;
	height: 180px;
	margin: 0px;
	/*border-radius: 50%;*/
`;

const Name = styled.h1`
	letter-spacing: 1px;
	font-weight: 400;
	font-size: 24px;
	margin-top: 10px;
	margin-left: 0px;
	margin-bottom: 10px;
`;

const Title = styled.h2`
	letter-spacing: 1.3px;
	font-weight: 300;
	font-size: 15px;
	margin-bottom: 3px;
	margin-top: 3px;
`;

const BlueH2 = styled.h2`
	font-weight: 300;
	color: rgba(122, 220, 220, 1);
	font-size: 15px;
	margin-left: 0px;
	margin-bottom: 3px;
	margin-top: 3px;
	margin-right: 22px;
`;

const PillLink = styled(Link)`
	/*width: 100px;*/
	/*height: 100px;*/
	letter-spacing: .6px;
	margin-top: 0px;
	margin-bottom: 4px;
	font-weight: 400;
	line-height: 32px;
	text-align: center;
	font-size: 15px;
	margin-left: 5px;
	margin-right: 5px;
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

const Divider = styled.h1`
	margin: 0;
	padding: 0;
	font-weight: 700;
	line-height: 32px;
	font-size: 15px;
`;

const NavBar = styled(Row)`
	margin-top: 25px;
	margin-left: 15px;
`;

const activeLinkStyle = {
	textDecoration: "underline",
	color: "#fb4a23"
};

export default class Sidebar extends React.Component {
	render() {
		return(
			<Container>
				<ImageTitleContainer>
					<Row>
						<Img src="http://res.cloudinary.com/julsgc/image/upload/v1499787752/ICCD_B-52_b2bzpt_Cropped_ktaijn.jpg"></Img>
					</Row>
					<Row>
						<Name> Julio Gudiño </Name>
					</Row>
					<Row>
						<Title> Digital Production </Title>
					</Row>
					<Row>
						<BlueH2> & </BlueH2> <Title> Web Development </Title>
					</Row>
				</ImageTitleContainer>
				<NavBar>
					<PillLink to="/"> About </PillLink>
					<Divider> | </Divider>
					<PillLink to="/work"> Work </PillLink>
					<Divider> | </Divider>
					<PillLink to="/about"> Contact </PillLink>
				</NavBar>
			</Container>
		);
	}
}