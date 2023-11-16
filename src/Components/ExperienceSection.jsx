import React from "react";
import Card from "./Atom/Card";
import turtle from "../assets/turtle.png";
import qlit from "../assets/qlit.png";
import start from "../assets/start.png";
import spf from "../assets/spf.png";
import styled from "styled-components";
import jar from "../assets/jar.gif";
import qm from "../assets/qm.png";
import npm from "../assets/npm.png";

const ExperiencesContainer = styled.div`
	display: flex;
	padding-top: 80px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: #ffffff;
	background: radial-gradient(at center bottom, #ffffff, #dcdcdc);
`;

const Cards = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
	perspective: 800px;
	padding: 0 1rem;
	gap: 1rem;
`;

const ExperienceSection = () => {
	const experiences = [
		{
			link: "https://www.dossiers.works",
			title: "Dossiers NFT Auction",
			description:
				"This website is for the auction of the NFTs that we created for the Dossiers project.",
			image: turtle,
		},
		{
			link: "https://qlitguvenlik.com",
			title: "Qlit Wi-Fi",
			description:
				"This project is for more secure door security system, fully remote mobile application that has connection to a ardunio device",
			image: qlit,
		},
		{
			link: "https://www.stateful.art",
			title: "Stateful Art",
			description: "This is my team's website, we do websites, mobile apps, design and music",
			image: start,
		},
		{
			link: "https://southern-power-fund.vercel.app/#home",
			title: "SPF",
			description: "A website for a company that is in the funding business",
			image: spf,
		},

		{
			link: "https://justaddmeta.com/projects/summerjam",
			title: "Summer Jam",
			description:
				"As part of JUSTADDMETA's gamified platform, helped building an NFT minting dapp with nextjs frontend",
			image: jar,
		},
		{
			link: "https://www.npmjs.com/~kantarcilaryasar",
			title: "My NPM Packages",
			description: "Here are my npm packages, you can check them out and use them in your projects!",
			image: npm,
		},
		{
			link: "",
			title: "Your Project Here",
			description: "Next can be your project!",
			image: qm,
		},
	];

	return (
		<ExperiencesContainer>
			<Cards>
				{experiences.map((experience) => (
					<Card key={experience.title} link={experience.link}>
						<Card.Image src={experience.image} />
						<Card.Title>{experience.title}</Card.Title>
						<Card.Description>{experience.description}</Card.Description>
					</Card>
				))}
			</Cards>
		</ExperiencesContainer>
	);
};

export default ExperienceSection;
