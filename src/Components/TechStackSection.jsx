import React from "react";
import { MainContainer, TechStackInfoContainer, TechStackInfoText } from "./STYLED/Styled";
import styled from "styled-components";
import sticksToCircle from "../assets/Gifs/sticksToCircle.gif";
import { motion } from "framer-motion";
import "./STYLED/styles.css";
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
				{myStack.map((item, index) => {
					return (
						<motion.div
							initial={{ opacity: 0, x: -100, y: index % 2 === 0 ? -50 : 50 }}
							animate={{ opacity: 1, x: 0, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className="TechStackInfoText"
							key={item}
						>
							{item}
						</motion.div>
					);
				})}
			</TechStackInfoContainer>
		</MainContainer>
	);
};

export default TechStackSection;
