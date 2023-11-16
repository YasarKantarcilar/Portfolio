import React from "react";
import styled from "styled-components";
const NavbarContainer = styled.div`
	height: 60px;
	position: absolute;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const NavbarLink = styled.a`
	color: #000;
	font-size: 1.3rem;
	font-weight: 600;
	text-decoration: none;
	margin: 0 1rem;
	cursor: pointer;
	color: ${(props) => props.color};
`;
const Navbar = ({ setActivePage, color }) => {
	const links = ["Home", "Tech Stack", "Experience", "Contact"];
	return (
		<NavbarContainer>
			{links.map((link, index) => (
				<NavbarLink color={color} onClick={() => setActivePage(link)} key={link}>
					{link}
				</NavbarLink>
			))}
		</NavbarContainer>
	);
};

export default Navbar;
