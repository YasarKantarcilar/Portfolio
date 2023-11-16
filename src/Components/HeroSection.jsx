import React from "react";
import styled from "styled-components";
import { MainContainer, GreetingHeader } from "./STYLED/Styled";

const HeroSectionGlassContainer = styled.div`
	width: 80%;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HeroSection = () => {
	return (
		<MainContainer className="heroSectionContainer" bg={"1"}>
			<div
				style={{
					position: "absolute",
					width: "70px",
					height: "70px",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: "1",
					backgroundColor: "black",
				}}
			></div>
			<HeroSectionGlassContainer>
				<GreetingHeader>
					Hello, this is Yaşar. I'm a Full Stack developer passionate about web and mobile technologies.
				</GreetingHeader>
			</HeroSectionGlassContainer>
		</MainContainer>
	);
};

export default HeroSection;
