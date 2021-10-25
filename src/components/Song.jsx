import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
	return (
		<SongContainer>
			<Img src={currentSong.cover} alt={currentSong.name}></Img>
			<H1>{currentSong.name}</H1>
			<H2>{currentSong.artist}</H2>
		</SongContainer>
	);
};

const SongContainer = styled.div`
	margin-top: 5vh;
	margin-bottom: 3vh;
	min-height: 40vh;
	max-height: 50vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 768px) {
		min-height: 50vh;
		max-height: 60vh;
		margin-top: 10vh;
		margin-bottom: 0vh;
	}
`;

const Img = styled.img`
	width: 18%;
	border-radius: 50%;
	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;

const H1 = styled.h2`
	padding:2rem 1rem 1rem 1rem;
`;

const H2 = styled.h3`
	font-size: 1rem;
`;

export default Song;
