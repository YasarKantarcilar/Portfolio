import styled from "styled-components";

const MainContainer = styled.div`
	min-height: 100vh;
	display: flex;
	height: auto;
	align-items: center;
	justify-content: center;

	gap: 70px;
`;
const TechStackInfoContainer = styled.div`
	width: 60%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
	@media (max-width: 768px) {
		width: 70%;
	}
`;

const TechStackInfoText = styled.p`
	font-size: 20px;
	font-weight: 500;
	color: white;
	background-color: #1e1e21;
	min-width: 125px;
	padding: 0 1rem;
	height: 50px;
	text-align: center;
	line-height: 50px;
	&:hover {
		background-color: #2c2c2e;
		transition: 0.5s;
		scale: 1.1;
	}
`;

const AboutMeContainer = styled.div`
	width: 40%;
	height: 70vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const ImageContainer = styled.div`
	width: 40%;
	aspect-ratio: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
`;

const MyImage = styled.img`
	width: 60%;
	aspect-ratio: 1/1;
	object-fit: cover;
	border-radius: 50%;
	z-index: 1;
	transition: 3s ease-in-out;
	${({ animation }) => animation && animation}
`;

const GreetingHeader = styled.p`
	font-size: 1.6rem;
	font-weight: 700;
	color: snow;
	width: 40%;
	z-index: 2;
	text-align: center;
	@media (max-width: 768px) {
		font-size: 1.3rem;
		width: 50%;
	}
`;

const GreetingText = styled.p`
	font-size: 20px;
	font-weight: 500;
	color: snow;
	width: 90%;
	text-align: center;
`;

export {
	MainContainer,
	TechStackInfoContainer,
	TechStackInfoText,
	AboutMeContainer,
	ImageContainer,
	MyImage,
	GreetingHeader,
	GreetingText,
};
