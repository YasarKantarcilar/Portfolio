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
			{/* <Parallax
				style={{
					width: "250px",
					aspectRatio: "1",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "50%",
					position: "relative",
					zIndex: 100,
					filter: "drop-shadow(8px 4px 20px #ffffff)",
				}}
				rotate={[0, 1440]}
			>
				<img
					width={50}
					height={50}
					src={reactLogo}
					style={{ position: "absolute", top: -25, zIndex: 150 }}
				/>
				<img
					width={50}
					height={50}
					src={typescriptLogo}
					style={{ position: "absolute", top: "20px", right: "20px", rotate: "45deg", zIndex: 150 }}
				/>
				<img
					width={50}
					height={50}
					src={nodejs}
					style={{
						position: "absolute",
						bottom: "50%",
						transform: "translateX(50%)",
						right: "-25px",
						rotate: "90deg",
						zIndex: 150,
					}}
				/>
				<img
					width={50}
					height={50}
					src={javascript}
					style={{ position: "absolute", bottom: "20px", right: "20px", rotate: "135deg", zIndex: 150 }}
				/>
				<img
					width={50}
					height={50}
					src={reactNative}
					style={{ position: "absolute", bottom: -25, rotate: "180deg", zIndex: 150 }}
				/>
				<img
					width={50}
					height={50}
					src={tailwind}
					style={{ position: "absolute", top: "20px", left: "20px", rotate: "-45deg", zIndex: 150 }}
				/>
				<img
					width={50}
					height={50}
					src={mui}
					style={{
						position: "absolute",
						bottom: "50%",
						transform: "translateX(-50%)",
						left: "-25px",
						rotate: "-90deg",
						zIndex: 150,
					}}
				/>
				<img
					width={50}
					height={50}
					src={styledPng}
					style={{ position: "absolute", bottom: "20px", left: "20px", rotate: "-135deg", zIndex: 150 }}
				/>
			</Parallax> */}
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
