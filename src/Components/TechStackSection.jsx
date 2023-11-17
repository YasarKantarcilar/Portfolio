import React from "react";
import { MainContainer, TechStackInfoContainer, TechStackInfoText } from "./STYLED/Styled";
import styled from "styled-components";
import sticksToCircle from "../assets/Gifs/sticksToCircle.gif";

const SticksGif = styled.img`
	width: 30%;
	height: 100%;
	object-fit: contain;
`;

const TechStackSection = () => {
	const myStack = [
		"TypeScript",
		"JavaScript",
		"NodeJS",
		"ExpressJS",
		"GraphQL",
		"ReactJS",
		"ReactNative",
		"MongoDB",
		"Firebase",
		"Tailwind",
		"Mantine",
		"MaterialUI",
		"styled-components",
		"HTML5",
		"CSS3",
		"Git",
		"GitHub",
		"GitLab",
		"Jira",
	];
	return (
		<MainContainer className="techStackCountainer" bg={"2"}>
			<SticksGif src={sticksToCircle} />
			<TechStackInfoContainer>
				{myStack.map((item) => {
					return <TechStackInfoText key={item}>{item}</TechStackInfoText>;
				})}
			</TechStackInfoContainer>
		</MainContainer>
	);
};

export default TechStackSection;
