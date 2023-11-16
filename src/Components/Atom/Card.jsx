import React from "react";
import styled from "styled-components";
const CardContainer = styled.a`
	background-color: black;
	border-radius: 16px;
	flex: 1;
	min-width: 300px;
	max-width: 49vw;
	height: 350px;
	transition: 0.3s;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	margin-bottom: 5px;

	flex-grow: 1;

	&:hover {
		transform: scale(1.05);
		z-index: 100;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}
`;

const Card = ({ children, link }) => {
	return <CardContainer href={link}>{children}</CardContainer>;
};

Card.Title = styled.h1`
	font-size: 1.5rem;
	font-weight: 600;
	color: #000;
	background-color: white;
	min-width: 150px;
	text-align: center;
	margin: 0;
	height: auto;
	padding: 0 0.5rem;
`;

Card.Image = styled.img`
	height: 40%;
	aspect-ratio: 1/1.5;
	border-radius: 16px;
	object-fit: contain;
`;

Card.Description = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	color: snow;
	margin: 0;
	width: 80%;
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: wrap;
	margin-top: 10%;
`;
export default Card;
